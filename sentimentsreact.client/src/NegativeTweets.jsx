import { useEffect, useState } from 'react';
import * as React from 'react';
import TextField from '@mui/material/TextField';

function NegativeTweets() {
    const [negativeTweets, setNegativeTweets] = useState([]); // Initialize as an empty array

    useEffect(() => {
        getNegativeTweets();
    }, []);

    async function getNegativeTweets() {
        try {
            const response = await fetch('https://localhost:7110/api/tweets/analyze-single');
            if (!response.ok) {
                throw new Error('Failed to fetch tweets');
            }
            const data = await response.json();
            setNegativeTweets(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div>
            <ul>
                {negativeTweets.length > 0 ? (
                    negativeTweets.map((tweet, index) => <li key={index}>{tweet.text}</li>)
                ) : (
                    <p>Loading...</p>
                )}
            </ul>
        </div>
    );
}

export default NegativeTweets;
