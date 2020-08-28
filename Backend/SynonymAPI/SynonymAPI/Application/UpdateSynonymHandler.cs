using MediatR;
using SynonymAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SynonymAPI.Application
{
    public class UpdateSynonym : IRequest<Dictionary<string, HashSet<string>>>
    {
        public AddSynonymModel Synonyms { get; private set; }

        public UpdateSynonym(AddSynonymModel synonyms)
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
