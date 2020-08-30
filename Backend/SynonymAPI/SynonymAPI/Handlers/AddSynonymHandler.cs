using MediatR;
using SynonymAPI.Application.Storage;
using SynonymAPI.Models;
using SynonymAPI.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SynonymAPI.Handlers
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
        private readonly ISynonymRepository _synonymRepository;

        public AddSynonymHandler(ISynonymRepository synonymRepository)
        {
            _synonymRepository = synonymRepository;
        }

        public Task<SynonymModel> Handle(AddSynonym request, CancellationToken cancellationToken)
        {
            //Check if keyword is already in store
            if (SynonymStorage.Synonyms.ContainsKey(request.Synonyms.KeyWord))
            {
                throw new ArgumentException("This word is already in store!");
            }

            return Task.FromResult(_synonymRepository.Add(request.Synonyms));
        }
    }
}
