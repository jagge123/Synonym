using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using SynonymAPI.Handlers;
using SynonymAPI.Models;

namespace SynonymAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SynonymController : ControllerBase
    {
        private readonly IMediator _mediator;

        public SynonymController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> Post(SynonymModel synonymModel)
        {
            var result = await _mediator.Send(new AddSynonym(synonymModel));

            return Created($"/{result.KeyWord}", result);
        }

        [HttpGet]
        [Route("{keyword}")]
        public async Task<IActionResult> Get(string keyword)
        {
            var result = await _mediator.Send(new GetSynonym(keyword));

            return new OkObjectResult(result);
        }

        [HttpPut]
        public async Task<IActionResult> Put(SynonymModel synonymModel)
        {
            var result = await _mediator.Send(new UpdateSynonym(synonymModel));

            return new OkObjectResult(result);
        }
    }
}
