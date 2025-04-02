using Microsoft.AspNetCore.Mvc;
using SentimentsReact.Server.Models;

namespace SentimentsReact.Server.Controllers
{
    [Route("api/tweets")]
    [ApiController]
    public class SentimentsController(SentimentService sentimentService) : ControllerBase
    {
        private readonly SentimentService _sentimentService = sentimentService;


        [HttpPost("analyze-single-torch")]
        public async Task<IActionResult> AnalyzeSingleTorch([FromBody] SentimentRequest request)
        {
            if (string.IsNullOrEmpty(request.Text))
            {
                return BadRequest("Text cannot be empty.");
            }

            var results = await _sentimentService.GetSentimentAsyncTorch(request);
            return Ok(results);
        }


        [HttpPost("analyze-single-vader")]
        public async Task<IActionResult> AnalyzeSingleVader([FromBody] SentimentRequest request)
        {
            if (string.IsNullOrEmpty(request.Text))
            {
                return BadRequest("Text cannot be empty.");
            }

            var results = await _sentimentService.GetSentimentAsyncVader(request);
            return Ok(results);
        }
    }
}
