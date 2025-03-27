using Microsoft.AspNetCore.Mvc;
using SentimentsReact.Server.Services;
using SentimentsReact.Server.Models;
using System.Collections.Generic; 

namespace SentimentsReact.Server.Controllers
{
    [Route("api/tweets")]
    [ApiController]
    public class SentimentsController(SentimentService sentimentService) : ControllerBase
    {
        private readonly SentimentService _sentimentService = sentimentService;

        [HttpGet("positive")]
        public List<string> GetPositive()
        {
            return _sentimentService.getPositiveSentiments();
        }

        [HttpGet("negative")]
        public List<string> GetNegative()
        {
            return _sentimentService.getNegativeSentiments();
        }

        [HttpGet("neutral")]
        public List<string> GetNeutral()
        {          
            return _sentimentService.getNeutralSentiments();
        }

        [HttpPost]
        public IActionResult CreateProduct([FromBody] string productName)
        {
            return Created("", $"Product '{productName}' created successfully.");
        }
    }
}
