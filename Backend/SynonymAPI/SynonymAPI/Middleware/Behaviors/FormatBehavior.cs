using MediatR;
using SynonymAPI.Handlers;
using SynonymAPI.Utils;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SynonymAPI.Features.Behaviours
{
    /// <summary>
    /// Middleware to handle incoming requests in mediatr pipeline
    /// </summary>
    /// <typeparam name="TRequest"></typeparam>
    /// <typeparam name="TResponse"></typeparam>
    public class FormatBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    {
        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
        {
            //Handle all requests of 'AddSynonym' set correct format on input
            if(request is AddSynonym addSynonym)
            {
                var synonyms = new HashSet<string>();
                foreach(var synonym in addSynonym.Synonyms.Synonyms)
                {
                    synonyms.Add(Format.FirstUpperRestLower(synonym));
                }
                addSynonym.Synonyms.KeyWord = Format.FirstUpperRestLower(addSynonym.Synonyms.KeyWord);
                addSynonym.Synonyms.Synonyms = synonyms;
            }
            //Handle all requests of 'AddSynonym' set correct format on input enabling for search to not be case-sensitive
            if (request is GetSynonym getSynonym)
            {
                getSynonym.Keyword = Format.FirstUpperRestLower(getSynonym.Keyword);
            }

            return await next();
        }
    }
}
