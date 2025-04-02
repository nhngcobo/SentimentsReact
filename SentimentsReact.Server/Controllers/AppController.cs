using Microsoft.AspNetCore.Mvc;
using SentimentsReact.Server.Models;

namespace SentimentsReact.Server.Controllers
{
    [Route("api/tweets")]
    [ApiController]
    public class SentimentsController(SentimentService sentimentService) : ControllerBase
    {
        private readonly SentimentService _sentimentService = sentimentService;


        [HttpPost("analyze-single")]
        public async Task<IActionResult> AnalyzeSingle([FromBody] SentimentRequest request)
        {
            if (string.IsNullOrEmpty(request.Text))
            {
                return BadRequest("Text cannot be empty.");
            }

            var results = await _sentimentService.GetSentimentAsync(request);
            return Ok(results);
        }
    }
}
