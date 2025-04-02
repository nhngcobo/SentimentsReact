using SentimentsReact.Server.Models;
using System.Text;
using System.Text.Json;


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

    // Send tweet to Python sentiment analysis service PyTorch
    public async Task<SentimentResponse?> GetSentimentAsyncTorch(SentimentRequest requestBodyReceived)
    {
        var json = JsonSerializer.Serialize(requestBodyReceived);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage response = await _httpClient.PostAsync("http://localhost:5000/analyze", content);
        response.EnsureSuccessStatusCode();

        string responseString = await response.Content.ReadAsStringAsync();

        var sentimentList = JsonSerializer.Deserialize<List<SentimentResponse>>(responseString, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        return sentimentList?.FirstOrDefault();
    }

    // Send tweet to Python sentiment analysis service Vader

    public async Task<SentimentResponse?> GetSentimentAsyncVader(SentimentRequest requestBodyReceived)
    {
        var json = JsonSerializer.Serialize(requestBodyReceived);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage response = await _httpClient.PostAsync("http://localhost:5000/analyze-vader", content);
        response.EnsureSuccessStatusCode();

        string responseString = await response.Content.ReadAsStringAsync();

        var sentimentList = JsonSerializer.Deserialize<List<SentimentResponse>>(responseString, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        return sentimentList?.FirstOrDefault();
    }
}