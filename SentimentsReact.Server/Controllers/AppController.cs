using Microsoft.AspNetCore.Mvc;
//using SentimentsReact.Server.Services;
using SentimentsReact.Server.Models;
using System.Collections.Generic; 

namespace SentimentsReact.Server.Controllers
{
    [Route("api/tweets")]
    [ApiController]
    public class SentimentsController(SentimentService sentimentService) : ControllerBase
    {
        private readonly SentimentService _sentimentService = sentimentService;


        [HttpGet("analyze-single")]
        public async Task<IActionResult> AnalyzeSingle()
        {
            var results = await _sentimentService.GetSentimentAsync();
            return Ok(results);
            //return _sentimentService.GetSentimentAsync();
        }
        
        //[HttpGet("analyze-all")]
        //public async Task<IActionResult> AnalyzeAll()
        //{
        //    var results = await _sentimentService.AnalyzeAllTweetsAsync();
        //    return Ok(results);
        //}

        [HttpPost]
        public IActionResult CreateProduct([FromBody] string productName)
        {
            return Created("", $"Product '{productName}' created successfully.");
        }
    }
}
