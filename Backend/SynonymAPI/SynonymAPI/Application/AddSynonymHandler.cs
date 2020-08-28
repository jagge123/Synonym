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
    public class AddSynonym : IRequest<Dictionary<string, HashSet<string>>>
    {
        public AddSynonymModel Synonyms { get; private set; }

    }

    public class AddSynonymHandler : IRequestHandler<AddSynonym, Dictionary<string, HashSet<string>>>
    {
        private readonly IMediator _mediator;

        public AddSynonymHandler(IMediator mediator)
        {
            _mediator = mediator;
        }

        public async Task<Dictionary<string, HashSet<string>>> Handle(AddSynonym request, CancellationToken cancellationToken)
        {
            var keyword = request.Synonyms.KeyWord;
            var values = request.Synonyms.Synonyms;
            //Check that if syn is already in store
            if (SynonymHolder.Synonyms.ContainsKey(request.Synonyms.KeyWord))
            {
                //Just redirected to PUT since value already exists
                return await _mediator.Send(new UpdateSynonym(request.Synonyms));
            }
            else
            {
                //Add synonym
                SynonymHolder.Synonyms.Add(keyword, values);
                //Check if any of the values exist and if so - add our keyword as their synonym
                UpdateExisting(keyword, values);
            }
            throw new NotImplementedException();
        }

        private static void UpdateExisting(string keyword, HashSet<string> values)
        {
            foreach (var value in values)
            {

                if (SynonymHolder.Synonyms.ContainsKey(value))
                {
                    HashSet<string> oldValues;
                    //Now we know that one of our values is already stored as a synonym then we add the keyword to that collection aswell
                    SynonymHolder.Synonyms.TryGetValue(value, out oldValues);
                    if (oldValues != null)
                        oldValues.Add(keyword);
                }
            }
        }
    }
}
