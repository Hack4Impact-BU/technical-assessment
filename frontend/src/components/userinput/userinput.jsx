import React from "react";
import './userinput.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function UserInput( {username, setUsername, email, setEmail, addUser} ){



    return (

        <section className='communityInput'>

            <Box component="form" className="name">
                <TextField label="enter name"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}                
                />
            </Box>

            <Box component="form" className="email">
                <TextField label="enter email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}                
                />
            </Box>
      
            <div className='addButton'>
                <button type='Button' onClick={addUser} className="button-5">join community</button>
            </div>
        </section>

    );
}