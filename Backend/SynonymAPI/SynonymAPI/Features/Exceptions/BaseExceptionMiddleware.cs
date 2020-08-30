using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace SynonymAPI.Features.Exceptions
{
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
            await context.Response.WriteAsync(exceptionModel.ToString());
        }
    }
}
