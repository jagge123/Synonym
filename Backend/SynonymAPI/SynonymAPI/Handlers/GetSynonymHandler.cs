using MediatR;
using SynonymAPI.Models;
using SynonymAPI.Storage;
using System.Threading;
using System.Threading.Tasks;

namespace SynonymAPI.Handlers
{
    public class GetSynonym : IRequest<SynonymModel>
    {
        public string Keyword { get; set; }

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
