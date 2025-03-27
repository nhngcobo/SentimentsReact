namespace SentimentsReact.Server.Models
{
    public interface ISentimentInterface
    {
        public int SentimentValue {  get; set; }

        public List<Object> TweetsList { get; set; }
    }
}
