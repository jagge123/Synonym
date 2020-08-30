﻿using MediatR;
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
    public class GetSynonym : IRequest<SynonymModel>
    {
        public string Keyword { get; private set; }

        public GetSynonym(string keyword)
        {
            Keyword = keyword;
        }
    }

    public class GetSynonymHandler : IRequestHandler<GetSynonym, SynonymModel>
    {
        private readonly ISynonymRepository _synonymRepository;

        public GetSynonymHandler(ISynonymRepository synonymRepository)
        {
            _synonymRepository = synonymRepository;
        }

        public Task<SynonymModel> Handle(GetSynonym request, CancellationToken cancellationToken)
        {
            return Task.FromResult(_synonymRepository.Get(request.Keyword));
        }
    }
}
