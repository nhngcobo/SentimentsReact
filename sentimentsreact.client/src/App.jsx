import { useEffect, useState } from 'react';
import './App.css';
import InputTweets from './InputTweets'
import * as React from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ChooseModel from './ChooseModel';



function App() {

    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [selectedModel, setSelectedModel] = useState(""); 

    const handleSendClick = () => {
        setSubmittedText(text);
    };

    const handleDeleteClick = () => {
        setSubmittedText("");
        setText("");
    };

    const handleModelSelect = (model) => {
        setSelectedModel(model);
      };
    
    return (
        <div id="App-div">
      <ChooseModel onModelSelect={handleModelSelect} />
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
                fullWidth='true'
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => (
                    e.key === "Enter" ? handleSendClick(e) : null
                  )}
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
            {submittedText && <InputTweets inputText={submittedText} selectedModel={selectedModel}/>}
        </div>
    );
}

export default App;