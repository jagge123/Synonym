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
            //Add synonym
            SynonymStorage.Synonyms.Add(model.KeyWord, model.Synonyms);
            //Check if any of the values exist and if so - add our keyword as their synonym
            //Also prepare data for rendering
            UpdateExisting(model.KeyWord, model.Synonyms);

            return model;
        }

        public SynonymModel Get(string keyword)
        {
            throw new NotImplementedException();
        }

        private static void UpdateExisting(string keyword, HashSet<string> synonyms)
        {
            foreach (var synonym in synonyms)
            {
                if (SynonymStorage.Synonyms.ContainsKey(synonym))
                {
                    HashSet<string> oldValues;
                    //Now we know that one of our values is already stored as a synonym then we add the keyword to that collection aswell
                    SynonymStorage.Synonyms.TryGetValue(synonym, out oldValues);
                    if (oldValues != null)
                        oldValues.Add(keyword);
                }
            }
        }
    }
}
