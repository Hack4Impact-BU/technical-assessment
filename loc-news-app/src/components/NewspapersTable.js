import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import newspapersData from '../../newspapers.json'; 

const NewspapersTable = () => {
  const [newspapers, setNewspapers] = useState([]);

  useEffect(() => {
    // Directly set the data using the local file.
    setNewspapers(newspapersData.newspapers);
  }, []);

  return (
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
          {newspapers.map((newspaper) => (
            <TableRow key={newspaper.id}>
              <TableCell>{newspaper.title}</TableCell>
              <TableCell>{newspaper.state}</TableCell>
              <TableCell>{newspaper.lccn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NewspapersTable;
