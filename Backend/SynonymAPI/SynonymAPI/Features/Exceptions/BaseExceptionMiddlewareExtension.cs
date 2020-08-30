using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
