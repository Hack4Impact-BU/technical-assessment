import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.css"


export default function BasicTable({ news }) {


  const newsData = news.newspapers;


  return (
    <div className='table'>
      <table>
      <thread>
        <tr>
          <th>state</th>
          <th>title</th>
          <th>lccn</th>
        </tr>
      </thread>
      <tbody>
      {newsData.map(news => (
        <tr key={news.id}>
          <td>{news.state}</td>
          <td><a href={news.url} target='_blank'>{news.title}</a></td>
          <td>{news.lccn}</td>
        </tr>
      ))}
      </tbody>
      </table>
    </div>
    
    
    // <TableContainer component={Paper}>

    //   <Table sx={{ minWidth: 650 }} aria-label="simple table">

    //     <TableHead>
    //       <TableRow className='legends'>       
    //         <TableCell>title</TableCell>
    //         <TableCell align="center">state</TableCell>
    //         <TableCell align="center">lccn</TableCell>
    //       </TableRow>
    //     </TableHead>
        
    //     <TableBody>

    //     </TableBody>
        
    //   </Table>

    // </TableContainer>
  );
}
