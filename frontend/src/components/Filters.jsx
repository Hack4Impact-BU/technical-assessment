import React from 'react';
import { TextField, Button } from '@mui/material';

function Filters({ state, setState, lccn, setLccn, fetchNews }) {
  return (
    <div>
      <TextField
        label="State"
        value={state}
        onChange={e => setState(e.target.value)}
        select
        SelectProps={{ native: true }}
      >
        <option value=""></option>
        <option value="CA">California</option>
        <option value="NY">New York</option>
        {/* Add more state options here */}
      </TextField>
      <TextField
        label="LCCN"
        value={lccn}
        onChange={e => setLccn(e.target.value)}
        select
        SelectProps={{ native: true }}
      >
        <option value=""></option>
        <option value="sn83030214">sn83030214</option>
        <option value="sn83030215">sn83030215</option>
        {/* Add more LCCN options here */}
      </TextField>
      <Button onClick={fetchNews}>Filter</Button>
    </div>
  );
}

export default Filters;
