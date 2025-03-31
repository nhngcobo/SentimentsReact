import { useEffect, useState } from 'react';
import './App.css';
import NegativeTweets from './NegativeTweets'
import * as React from 'react';
import {TextField, Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


function App() {

    const ariaLabel = { 'aria-label': 'description' };


    return (
        <div id="App-div">
            <h3>Sentiment Analysis</h3>

           <TextField
                id="outlined-textarea"
                placeholder="How do you feel?"
                multiline
                fullWidth='true'
                sx={{ 
                    "& .MuiInputBase-root": { width: "20rem" } 
                  }}
                />
            <Button id="Send-Button"
                    size="large" 
                    endIcon={<SendIcon />}
                    >Send
            </Button>
            <NegativeTweets/>
        </div>       
    );
}

export default App;