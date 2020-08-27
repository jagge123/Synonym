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
    public class AddSynonym : IRequest<AddSynonymModel>
    {
        public AddSynonymModel Synonyms { get; private set; }

    }

    public class AddSynonymHandler : IRequestHandler<AddSynonym, AddSynonymModel>
    {
        public Task<AddSynonymModel> Handle(AddSynonym request, CancellationToken cancellationToken)
        {
            Storage.Storage.Synonyms.Add(request.Synonyms.KeyWord, request.Synonyms.Synonyms);
            return Task.FromResult(request.Synonyms);
        }
    }
}
