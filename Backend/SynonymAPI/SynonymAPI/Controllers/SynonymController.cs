using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SynonymAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SynonymController : ControllerBase
    {

        public async Task<IActionResult> Post()
        {
            return Ok();
        }

        public async Task<IActionResult> Get()
        {
            return Ok();
        }

        [Route("{id}")]
        public async Task<IActionResult> Get(string word)
        {
            return Ok();
        }
    }
}
