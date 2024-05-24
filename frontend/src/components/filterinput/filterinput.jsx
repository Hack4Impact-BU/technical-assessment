import React from "react";
import './filterinput.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function FilterInput({stateinput, setStateInput, lccninput, setLccnInput }) {

    return (
        <div className="filter">
            <Box component="form" className="USStates">
                <TextField label="enter state"
                variant="standard"
                value={stateinput}
                onChange={(e) => setStateInput(e.target.value)}                
                />
            </Box>
            <Box component="form" className="lccn">
                <TextField label="enter lccn"
                variant="standard"
                value={lccninput}
                onChange={(e) => setLccnInput(e.target.value)}                
                />
            </Box>
        </div>
    )
}