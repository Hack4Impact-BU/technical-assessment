import { Menu, MenuItem, Button } from '@mui/material';
import { useState } from 'react';

export default function StateFilter ({state, setState}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelectItem = (selectedState) => {
        state = selectedState
        setState(selectedState)
        handleClose() 
    }
    
    const states = [
        'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
        'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
        'West Virginia', 'Wisconsin', 'Wyoming'
      ];

  return (
    <div>
        <button
        onClick={handleClick}
        className='border-none bg-black text-white whitespace-nowrap mb-0'
        >
            Filter by state
        </button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={isOpen}
        onClose={handleClose}
      >
        {states.map((state, index) => (
            <MenuItem 
            onClick={() => handleSelectItem(state)}
             >{state}</MenuItem>
          ))}
      </Menu>
    </div>
  );
}