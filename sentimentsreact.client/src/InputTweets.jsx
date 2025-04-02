import { useEffect, useState } from 'react';
import * as React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function InputTweets({ inputText, selectedModel}) {
    const [feeling, setFeeling] = useState([]);


    useEffect(() => {
        if (selectedModel == "vader"){
            getInputTweetsVader();
        }
        if (selectedModel == "pytorch"){
            getInputTweetsPyTorch();
        }
    }, [inputText]);

        //Sentiment Analysis using Vader
        async function getInputTweetsVader() {
            try {
                const response = await fetch("https://localhost:7110/api/tweets/analyze-single-vader", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ text: inputText }),
                })
                if (!response.ok) {
                    throw new Error('Failed to fetch tweets');
                }
                const data = await response.json();
                setFeeling(data['label']);
            } catch (error) {
                console.error(error.message);
            }
        }

    //Sentiment Analysis using pyTorch
    async function getInputTweetsPyTorch() {
        try {
            const response = await fetch("https://localhost:7110/api/tweets/analyze-single-torch", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ text: inputText }),
            })
            if (!response.ok) {
                throw new Error('Failed to fetch tweets');
            }
            const data = await response.json();
            setFeeling(data['label']);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className='feeling-response'>
            <p className='feeling-resp-p'>You've been feeling : </p>
            {feeling == "POSITIVE" && < EmojiEmotionsIcon
                sx={{ paddingTop: '1em' }}
            />}
            {feeling == "NEGATIVE" && < SentimentVeryDissatisfiedIcon
                sx={{ paddingTop: '1em' }}
            />}
            <p className='feeling-excl'>!</p>
        </div>
    );
}

export default InputTweets;
