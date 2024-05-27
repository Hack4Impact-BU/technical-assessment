import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from '@mui/material';
import './NewsDirectory.css';

function NewsDirectory({ news }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="title-cell" sx={{ fontWeight: 'bold' }}>Title</TableCell>
            <TableCell className="other-cell" sx={{ fontWeight: 'bold' }}>State</TableCell>
            <TableCell className="other-cell" sx={{ fontWeight: 'bold' }}>LCCN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
            <TableRow key={index}>
              <TableCell className="title-cell">{item.title}</TableCell>
              <TableCell className="other-cell">{item.state}</TableCell>
              <TableCell className="other-cell">{item.lccn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 50]}
        component="div"
        count={news.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default NewsDirectory;
