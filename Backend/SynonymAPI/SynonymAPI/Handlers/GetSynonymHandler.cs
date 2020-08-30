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
        public Task<SynonymModel> Handle(GetSynonym request, CancellationToken cancellationToken)
        {
            HashSet<string> values;

            SynonymHolder.Synonyms.TryGetValue(request.Keyword, out values);

            var result = new SynonymModel()
            {
                KeyWord = request.Keyword,
                Synonyms = values
            };

            return Task.FromResult(result);
        }
    }
}
