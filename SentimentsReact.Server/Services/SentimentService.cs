namespace SentimentsReact.Server.Services
{
    public class SentimentService
    {
        public List<string> getPositiveSentiments()
        {
            List<string> sentiments = [string.Empty, "Happy", "Laugh", "Smile"];

            return sentiments;
        }

        public List<string> getNegativeSentiments()
        {
            List<string> sentiments = [string.Empty, "Sad", "Angry", "Amavaka"];

            return sentiments;
        }

        public List<String> getNeutralSentiments()
        {
            List<string> sentiments = [string.Empty, "Calm", "Clueless", "Don't know"];

            return sentiments;
        }
    }
}
