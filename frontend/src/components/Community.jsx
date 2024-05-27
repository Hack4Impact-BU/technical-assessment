import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function Community({ community }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
          <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {community.map((member, index) => (
          <TableRow key={index}>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default Community;