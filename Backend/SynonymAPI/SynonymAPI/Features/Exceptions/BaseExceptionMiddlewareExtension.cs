using Microsoft.AspNetCore.Builder;

namespace SynonymAPI.Features.Exceptions
{
    public static class BaseExceptionMiddlewareExtensions
    {
        public static IApplicationBuilder UseBaseException(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<BaseExceptionMiddleware>();
        }
    }
}
