import { useEffect, useState } from 'react';
import './App.css';
import InputTweets from './InputTweets'
import * as React from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';



function App() {

    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");

    const handleSendClick = () => {
        setSubmittedText(text);
    };

    const handleDeleteClick = () => {
        setSubmittedText("");
        setText("");
    };

    return (
        <div id="App-div">
            <Typography id="heading-sentiment" variant="overline" gutterBottom sx={{ display: 'block', fontSize: 'large', paddingLeft: '15em' }}>
                SENTIMENT ANALYSIS
            </Typography>
            <Button startIcon={<DeleteIcon />}
                size="large"
                onClick={handleDeleteClick}
                sx={{ marginTop: '0.4em', background: 'transparent', color: 'black' }}
            >
                Delete
            </Button>
            <TextField
                id="outlined-textarea"
                placeholder="How do you feel?"
                multiline
                fullWidth='true'
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{
                    "& .MuiInputBase-root": { width: "25rem" },
                    marginRight: "4em",
                    marginLeft: "4em"
                }}
            />
            <Button className="Send-Button"
                size="large"
                endIcon={<SendIcon />}
                onClick={handleSendClick}
                sx={{ marginTop: '0.4em', background: 'transparent', color: 'black' }}
            >Send
            </Button>
            {submittedText && <InputTweets inputText={submittedText} />}
        </div>
    );
}

export default App;