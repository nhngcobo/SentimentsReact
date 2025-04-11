import { useEffect, useState } from 'react';
import './App.css';
import InputTweets from './InputTweets'
import * as React from 'react';
import { TextField, Button, Menu, MenuItem,
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions 
 } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ChooseModel from './ChooseModel';
import LoginIcon from '@mui/icons-material/Login';
import SignIn from './SignIn'
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';

function App() {
    const [text, setText] = useState("");
    const [submittedText, setSubmittedText] = useState("");
    const [selectedModel, setSelectedModel] = useState(""); 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [signInClicked, setSignInClicked] = useState(false);
    

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
    
    const open = Boolean(anchorEl);
    
    const handleMouseEnter = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
        setSignInClicked(true);
    };
    
    return (
        <div id="App-div">
            <LoginIcon
                fontSize="large"
                sx={{ 
                    cursor: 'pointer',
                    //position: 'absolute',
                    right: '20px',
                    top: '20px'
                }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onMouseEnter={handleMouseEnter}
            />
   
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    'aria-labelledby': 'basic-button',
                    onMouseLeave: handleClose,
                    sx: {
                        mt: 1,
                        minWidth: '120px'
                    },
                }}
                disableAutoFocusItem={true}
                keepMounted
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}

                TransitionProps={{ timeout: 100 }}
            >
                <MenuItem 
                    onClick={handleClose}
                    onMouseEnter={(e) => e.stopPropagation()}
                >
                    Login
                </MenuItem>
                <MenuItem 
                    onClick={handleClose}
                    onMouseEnter={(e) => e.stopPropagation()}
                >
                    Sign Up
                </MenuItem>
            </Menu>
            <Dialog open={signInClicked} onClose={() => setSignInClicked(false)}
                
                PaperProps={{
                    sx: {
                      overflow: 'hidden', // Disables scrolling
                      maxHeight: 'calc(100vh - 64px)', // Ensures dialog doesn't exceed viewport
                    },
                  }}>
  <SignIn />
</Dialog>

            <ChooseModel onModelSelect={handleModelSelect} />
            <Typography id="heading-sentiment" variant="overline" gutterBottom sx={{ display: 'block', fontSize: 'large', paddingLeft: '15em' }}>
                SENTIMENT ANALYSIS
            </Typography>
            <Button 
                startIcon={<DeleteIcon />}
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
            <Button 
                className="Send-Button"
                size="large"
                endIcon={<SendIcon />}
                onClick={handleSendClick}
                sx={{ marginTop: '0.4em', background: 'transparent', color: 'black' }}
            >
                Send
            </Button>
            {submittedText && <InputTweets inputText={submittedText} selectedModel={selectedModel}/>}
        </div>
    );
}

export default App;