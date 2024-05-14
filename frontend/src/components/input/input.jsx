import React from "react"
import "./input.css"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'

export default function Input() {
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')

    function addUser() {
        fetch('http://localhost:3000/add-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first: first,
                last: last,
                email: email
            })
        })
    }

    return (
        <div className='input'>
            <ThemeProvider theme={theme}>
                <TextField 
                    id="input-first" 
                    label="First Name" 
                    variant="outlined"
                    onChange={(event) => setFirst(event.target.value)}
                />
                <TextField 
                    id="input-last" 
                    label="Last Name" 
                    variant="outlined"
                    onChange={(event) => setLast(event.target.value)}
                />
                <TextField 
                    id="input-email" 
                    label="Email" 
                    variant="outlined"
                    sx={{width: '18rem'}}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Button 
                    variant="contained" 
                    disableElevation 
                    endIcon={<SendIcon />}
                    onClick={() => {
                        if (first != "" && last != "" && email != "") {
                            addUser();
                            window.open('community', '_self');
                        }
                    }}
                >Submit</Button>
            </ThemeProvider>
        </div>
    )
}

const theme = createTheme({
    palette: {
      primary: {
        main: '#9880a8',
      }
    },
    typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
    },
})