import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import newspapersData from '../../newspapers.json'; // Importing the JSON file internally

const NewspapersTable = () => {
  const [newspapers, setNewspapers] = useState([]);
  const [filteredNewspapers, setFilteredNewspapers] = useState([]);
  const [stateFilter, setStateFilter] = useState('');
  const [lccnFilter, setLccnFilter] = useState('');

  useEffect(() => {
    // Set initial data
    setNewspapers(newspapersData.newspapers);
    setFilteredNewspapers(newspapersData.newspapers);
  }, []);

  useEffect(() => {
    // Filter the newspapers based on the state and LCCN filters
    const filtered = newspapers.filter(newspaper => 
      (stateFilter === '' || newspaper.state.toLowerCase().includes(stateFilter.toLowerCase())) &&
      (lccnFilter === '' || newspaper.lccn.toLowerCase().includes(lccnFilter.toLowerCase()))
    );
    setFilteredNewspapers(filtered);
  }, [stateFilter, lccnFilter, newspapers]);

  return (
    <Box>
      <Box mb={2} display="flex" gap={2}>
        <TextField
          label="Filter by State"
          variant="outlined"
          value={stateFilter}
          onChange={(e) => setStateFilter(e.target.value)}
          sx={{
            backgroundColor: 'white',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />
        <TextField
          label="Filter by LCCN"
          variant="outlined"
          value={lccnFilter}
          onChange={(e) => setLccnFilter(e.target.value)}
          sx={{
            backgroundColor: 'white',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'gray',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black',
              },
            },
          }}
        />
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>State</TableCell>
              <TableCell>LCCN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredNewspapers.map((newspaper) => (
              <TableRow key={newspaper.id}>
                <TableCell>{newspaper.title}</TableCell>
                <TableCell>{newspaper.state}</TableCell>
                <TableCell>{newspaper.lccn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NewspapersTable;
