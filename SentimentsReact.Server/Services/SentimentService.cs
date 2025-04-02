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

    // Send tweet to Python sentiment analysis service
    public async Task<SentimentResponse?> GetSentimentAsync(SentimentRequest requestBodyReceived)
    {
        var json = JsonSerializer.Serialize(requestBodyReceived);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        HttpResponseMessage response = await _httpClient.PostAsync("http://localhost:5000/analyze", content);
        response.EnsureSuccessStatusCode();

        string responseString = await response.Content.ReadAsStringAsync();

        var sentimentList = JsonSerializer.Deserialize<List<SentimentResponse>>(responseString, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

        return sentimentList?.FirstOrDefault();
    }
}