namespace SentimentsReact.Server.Models
{
    public class TweetSentiment
    {
        public string Text { get; set; }
        public string Sentiment { get; set; }
        public float Score { get; set; }
    }
}
