import React from "react"
import "./filter.css"
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function Filter({ data, sendState, sendLCCN }) {
    return (
        <div className='filter'>
            <p id='filter-text'><b>Filter by</b></p>
            <ThemeProvider theme={theme}>
            <Autocomplete
                disablePortal
                id="filter-state"
                options={[...new Set(data.map(entry => entry.state))]}
                sx={{ 
                    width: 260,
                    "& + .MuiAutocomplete-popper .MuiAutocomplete-option": {
                        fontFamily: 'Poppins',
                    },
                }}
                renderInput={(params) => <TextField {...params} label={<Typography fontFamily='Poppins'>State</Typography>} />}
                onChange={(event, value) => sendState(value)}
            />
            <TextField 
                id="filter-lccn" 
                label="LCCN" 
                variant="outlined"
                onChange={(event) => sendLCCN(event.target.value)}
            />
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

