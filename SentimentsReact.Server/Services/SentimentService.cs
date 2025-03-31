using SentimentsReact.Server.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

public class SentimentService
{
    private readonly HttpClient _httpClient;
    private readonly string _filePath = @"C:\Users\Nhlanhla Fortune\source\repos\SentimentsReact\SentimentsReact.Server\Services\UkraineRussiaWarTwitterJSON.json";

    public SentimentService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    // Load tweets from JSON file
    private List<string> LoadTweets()
    {
        if (!File.Exists(_filePath)) return new List<string>();

        string content = File.ReadAllText(_filePath);
        var tweets = JsonSerializer.Deserialize<List<Tweet>>(content);
        return tweets?.ConvertAll(t => t.Text) ?? new List<string>();
    }

    // Send tweet to Python sentiment analysis service
    public async Task<SentimentResponse> GetSentimentAsync()
    {
        //var requestBody = new { text = tweet };
        //var jsonContent = new StringContent(JsonSerializer.Serialize(requestBody), Encoding.UTF8, "application/json");

        var dummyContent = new { text = "I am so very just okay today" };
        var json = JsonSerializer.Serialize(dummyContent);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage response = await _httpClient.PostAsync("http://localhost:5000/analyze", content);
        response.EnsureSuccessStatusCode();

        string responseString = await response.Content.ReadAsStringAsync();

        // Deserialize into an array and take the first element
        var sentimentList = JsonSerializer.Deserialize<List<SentimentResponse>>(responseString, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        return sentimentList?.FirstOrDefault(); // Return the first sentiment result
    }

    // Process all tweets
    //public async Task<List<TweetSentiment>> AnalyzeAllTweetsAsync()
    //{
    //    List<string> tweets = LoadTweets();
    //    List<TweetSentiment> results = new();

    //    foreach (var tweet in tweets)
    //    {
    //        SentimentResponse sentiment = await GetSentimentAsync(tweet);
    //        results.Add(new TweetSentiment { Text = tweet, Sentiment = sentiment.Label, Score = sentiment.Score });
    //    }

    //    return results;
    //}
}