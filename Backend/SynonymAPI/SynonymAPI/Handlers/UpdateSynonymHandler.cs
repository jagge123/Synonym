using MediatR;
using SynonymAPI.Models;
using SynonymAPI.Storage;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SynonymAPI.Handlers
{
    public class UpdateSynonym : IRequest<SynonymModel>
    {
        public SynonymModel SynonymModel { get; set; }

        public UpdateSynonym(SynonymModel synonymModel)
        {
            SynonymModel = synonymModel;
        }

    }
    public class UpdateSynonymHandler : IRequestHandler<UpdateSynonym, SynonymModel>
    {
        private readonly ISynonymRepository _synonymRepository;

        public UpdateSynonymHandler(ISynonymRepository synonymRepository)
        {
            _synonymRepository = synonymRepository;
        }
        public Task<SynonymModel> Handle(UpdateSynonym request, CancellationToken cancellationToken)
        {
            return Task.FromResult(_synonymRepository.Update(request.SynonymModel));
        }
    }
}
