using MediatR;
using SynonymAPI.Models;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SynonymAPI.Handlers
{
    public class UpdateSynonym : IRequest<Dictionary<string, HashSet<string>>>
    {
        public SynonymModel Synonyms { get; private set; }

        public UpdateSynonym(SynonymModel synonyms)
        {
            Synonyms = synonyms;
        }
    }

    public class UpdateSynonymHandler : IRequestHandler<UpdateSynonym, Dictionary<string, HashSet<string>>>
    {
        public Task<Dictionary<string, HashSet<string>>> Handle(UpdateSynonym request, CancellationToken cancellationToken)
        {
            //TODO: Update synonyms
            throw new NotImplementedException();
        }
    }
}
