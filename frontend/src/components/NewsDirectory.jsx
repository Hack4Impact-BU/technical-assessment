import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function NewsDirectory({ news }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>State</TableCell>
          <TableCell>LCCN</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {news.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.state}</TableCell>
            <TableCell>{item.lccn}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default NewsDirectory;
