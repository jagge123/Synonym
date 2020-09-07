using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace SynonymAPI.Features.Exceptions
{
    /// <summary>
    /// Middleware to handle common exceptions in application
    /// </summary>
    public class BaseExceptionMiddleware
    {
        private readonly RequestDelegate _next;

        public BaseExceptionMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            int statusCode = 0;
            ExceptionModel exceptionModel = null;

            try
            {
                await _next(context);
            }
            catch(Exception exception)
            {
                switch (exception)
                {
                    case ArgumentException _:
                        statusCode = (int)HttpStatusCode.BadRequest;
                        exceptionModel = new ExceptionModel()
                        {
                            Severity = Severity.Error,
                            Diagonistics = exception.Message
                        };
                        break;

                    default:
                        statusCode = (int)HttpStatusCode.InternalServerError;
                        exceptionModel = new ExceptionModel()
                        {
                            Severity = Severity.Fatal,
                            Diagonistics = exception.Message
                        };
                        break;
                }                 
            }
            context.Response.StatusCode = statusCode;
            var result = new ObjectResult(exceptionModel) {StatusCode = statusCode };
            await ExecuteResultAsync(context, result);
        }

        protected internal virtual async Task ExecuteResultAsync(HttpContext context, IActionResult result)
        {
            await result.ExecuteResultAsync(new ActionContext { HttpContext = context });
        }
    }
}
