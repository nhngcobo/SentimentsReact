import { useEffect, useState } from 'react';

function PositiveTweets() {
    const [positiveTweets, setPositiveTweets] = useState();

    useEffect(() => {
        getPositiveTweets();
    }, []);


    return ({positiveTweets});

    async function getPositiveTweets() {
        const response = await fetch('https://localhost:7110/api/tweets/positive');
        if (response.ok) {
            const data = await response.json();
            setPositiveTweets(data);
        }
    }
}

export default PositiveTweets;