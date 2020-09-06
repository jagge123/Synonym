using SynonymAPI.Application.Storage;
using SynonymAPI.Models;
using System;
using System.Collections.Generic;

namespace SynonymAPI.Storage
{
    public class SynonymRepository : ISynonymRepository
    {
        public SynonymModel Add(SynonymModel model)
        {
            //We dont handle updates in this version...
            if (SynonymStorage.Synonyms.ContainsKey(model.KeyWord))
                throw new ArgumentException("This word is already in store!");
            //We use one dictionary for storage and one HashSet for storing keys enabling faster search
            SynonymStorage.Synonyms.Add(model.KeyWord, model.Synonyms);
            SynonymStorage.SynonymKeys.Add(model.KeyWord);
            UpdateExisting(model.KeyWord, model.Synonyms);

            return model;
        }

        public SynonymModel Get(string keyword)
        {
            HashSet<string> values = new HashSet<string>();
            if (SynonymStorage.SynonymKeys.Contains(keyword))
                SynonymStorage.Synonyms.TryGetValue(keyword, out values);

            return new SynonymModel()
            {
                KeyWord = keyword,
                Synonyms = values
            };
        }

        private static void UpdateExisting(string key, HashSet<string> synonyms)
        {
            foreach (var synonym in synonyms)
            {
                if (SynonymStorage.SynonymKeys.Contains(synonym))
                {
                    AddSynonym(synonym, key);
                }
                else
                {
                    //Add synonym as key and keyword as value to work in both directions.
                    SynonymStorage.Synonyms.Add(synonym, new HashSet<string>() { key });
                    SynonymStorage.SynonymKeys.Add(synonym);
                }
            }
        }

        private static void AddSynonym(string key, string synonym)
        {
            HashSet<string> values;
            //Now we know that one of our values is already stored as a synonym then we add the keyword to that collection aswell
            SynonymStorage.Synonyms.TryGetValue(key, out values);
            if (values != null) //Better safe than sorry...
            {
                values.Add(synonym);
                SynonymStorage.Synonyms[key] = values;
            }
        }
    }
}
