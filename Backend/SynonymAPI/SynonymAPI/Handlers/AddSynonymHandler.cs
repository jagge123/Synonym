using MediatR;
using SynonymAPI.Application.Storage;
using SynonymAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SynonymAPI.Application
{
    public class AddSynonym : IRequest<SynonymModel>
    {
        public SynonymModel Synonyms { get; private set; }

        public AddSynonym(SynonymModel synonyms)
        {
            Synonyms = synonyms;
        }

    }

    public class AddSynonymHandler : IRequestHandler<AddSynonym, SynonymModel>
    {
        public Task<SynonymModel> Handle(AddSynonym request, CancellationToken cancellationToken)
        {
            var keyword = request.Synonyms.KeyWord;
            var values = request.Synonyms.Synonyms;
            //Check if keyword is already in store
            if (SynonymHolder.Synonyms.ContainsKey(request.Synonyms.KeyWord))
            {
                throw new ArgumentException("This word is already in store!");
            }
            else
            {
                //Add synonym
                SynonymHolder.Synonyms.Add(keyword, values);
                //Check if any of the values exist and if so - add our keyword as their synonym
                //Also prepare data for rendering
                UpdateExisting(keyword, values);
            }
            return Task.FromResult(request.Synonyms);
        }

        private static void UpdateExisting(string keyword, HashSet<string> synonyms)
        {
            foreach (var synonym in synonyms)
            {
                if (SynonymHolder.Synonyms.ContainsKey(synonym))
                {
                    HashSet<string> oldValues;
                    //Now we know that one of our values is already stored as a synonym then we add the keyword to that collection aswell
                    SynonymHolder.Synonyms.TryGetValue(synonym, out oldValues);
                    if (oldValues != null)
                        oldValues.Add(keyword);
                }
            }
        }
    }
}
