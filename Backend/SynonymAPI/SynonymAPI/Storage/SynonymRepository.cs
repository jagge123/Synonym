using SynonymAPI.Application.Storage;
using SynonymAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SynonymAPI.Storage
{
    public class SynonymRepository : ISynonymRepository
    {
        public SynonymModel Add(SynonymModel model)
        {
            if (SynonymStorage.Synonyms.ContainsKey(model.KeyWord))
                throw new ArgumentException("This word is already in store!");

            SynonymStorage.Synonyms.Add(model.KeyWord, model.Synonyms);
            UpdateExisting(model.KeyWord, model.Synonyms);

            return model;
        }

        public SynonymModel Get(string keyword)
        {
            HashSet<string> values;
            SynonymStorage.Synonyms.TryGetValue(keyword, out values);
            //if (values == null)
                //Should be 404 not found
                //throw new KeyNotFoundException($"No synonyms found for: {keyword}");

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
                if (SynonymStorage.Synonyms.ContainsKey(synonym))
                {
                    AddSynonym(synonym, key);
                }
                else
                {
                    //Add synonym as key and keyword as value to work in both directions.
                    SynonymStorage.Synonyms.Add(synonym, new HashSet<string>() { key });
                }
            }
        }

        private static void AddSynonym(string key, string synonym)
        {
            HashSet<string> values;
            //Now we know that one of our values is already stored as a synonym then we add the keyword to that collection aswell
            SynonymStorage.Synonyms.TryGetValue(key, out values);
            if (values != null)
            {
                values.Add(synonym);
                SynonymStorage.Synonyms[key] = values;
            }
        }
    }
}
