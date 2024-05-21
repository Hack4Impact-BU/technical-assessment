

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid} from '@mui/x-data-grid';
import StateFilter from '../components/StateFilter';
import LccnFilter from '../components/LccnFilter';
import TextField from '@mui/material/TextField';

function Data ()  {
  const [newspapers, setNewspapers] = useState([]);
  const [selectedState, setState] = useState([])
  const [searchValue, setSearch] = useState('')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/newspapers')
      .then(response => {
        setNewspapers(response.data.newspapers);
        console.log(response.data)
        console.log("this is newspapers") 
        console.log(newspapers)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID'},
    { field: 'lccn', headerName: 'lccn'},
    { field: 'state', headerName: 'State'},
    { field: 'title', headerName: 'Title'}
  ];

  const filteredRows = newspapers
  .filter(item => selectedState.length === 0 || selectedState.includes(item.state))
  .filter(item => item.lccn.toLowerCase().includes(searchValue.toLowerCase()))
  .map((item, index) => ({
    id: index,
    lccn: item.lccn,
    state: item.state,
    title: item.title,
  }));
  
  const rows = newspapers.map((item, index) => ({
    id: index,
    lccn: item.lccn,
    url: item.url,
    state: item.state,
    title: item.title,
}));

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await axios.post('http://localhost:3000/emails', { name, email });
    alert('Subscription successful!');
    setName('');
    setEmail('');
  } catch (error) {
    console.error('Error subscribing:', error);
    alert('Subscription failed');
  }
};
return (
        <div className='w-full h-screen '>

        <div className='w-[80%] mx-auto '>
        <h1 className='text-center mt-10'>Directory</h1>
        <div className=' flex items-center mt-10 gap-4 pb-4'>
            <LccnFilter  searchValue={searchValue} setSearchValue={setSearch}/> 
            <StateFilter state={selectedState} setState={setState}/>
        </div>
        
        <div className='mt-2'>
    
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pagination
            pageSize={50}
            rowsPerPageOptions={[50]}
            />
          
        </div>
    
        <div className='flex flex-col mt-10 gap-4 border-2 p-10 border-black-800 rounded-[8px]'>
          <p>Join the mailing list!</p>
          <TextField  
          label="Name" 
          variant="outlined" 
          onChange={(e) => setName(e.target.value)}/>
          <TextField  
          label="Email" 
          variant="outlined" 
          onChange={(e) => setEmail(e.target.value)}/>
          <button className="w-[20%] "onClick={handleSubmit}>Subscribe</button>
    
        </div>

        </div>
        
        
        
    
      </div>
  
);
};

export default Data;
