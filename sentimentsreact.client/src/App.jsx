import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [positiveTweets, setPositiveTweets] = useState();

    useEffect(() => {
        getPositiveTweets();
    }, []);


    return (
        <div>
            <h1 id="tableLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {positiveTweets}
        </div>
    );

    async function getPositiveTweets() {
        const response = await fetch('https://localhost:7110/api/tweets/positive');
        if (response.ok) {
            const data = await response.json();
            setPositiveTweets(data);
        }
    }
}

export default App;