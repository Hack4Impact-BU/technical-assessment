import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./table.css"


export default function BasicTable({ news, stateinput, lccninput }) {


  const newsData = news.newspapers;

  const filteredNews = newsData.filter(state => 
    state.state.toLowerCase().startsWith(stateinput.toLowerCase()) &&
    state.lccn.toLowerCase().startsWith(lccninput.toLowerCase())
  )


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const displayedNews = filteredNews.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <div className='table'>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          {/* //table header */}
          <TableHead>
            <TableRow>
              <TableCell align='left' style={{ minWidth: 100 }}>state</TableCell>
              <TableCell align='left' style={{ minWidth: 200 }}>title</TableCell>
              <TableCell align='left' style={{ minWidth: 100 }}>lccn</TableCell>
            </TableRow>
          </TableHead>
          
          <TableBody>
            {displayedNews.map(news => (
              <TableRow hover role ="checkbox" tabIndex={-1} key={news.id}>
                <TableCell align='left'>{news.state}</TableCell>
                <TableCell align='left'>
                  <a href={`https://www.loc.gov/items/${news.lccn}`} target='_blank'>
                    {news.title}
                  </a>
                </TableCell>
                <TableCell align='left'>{news.lccn}</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </TableContainer>
        {/* TablePagination */}
        <TablePagination
         rowsPerPageOptions={[10, 15, 30]}
         component="div"
         count={filteredNews.length}
         rowsPerPage={rowsPerPage}
         page={page}
         onPageChange={handleChangePage}
         onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>


{/* old table rendering with native html */}
      {/* <table>
      <thread>
        <tr>
          <th>state</th>
          <th>title</th>
          <th>lccn</th>
        </tr>
      </thread>
      <tbody>
      {filteredNews.map(news => (
        <tr key={news.id}>
          <td>{news.state}</td>
          <td><a href={`https://www.loc.gov/item/${news.lccn}`} target='_blank'>{news.title}</a></td>
          <td>{news.lccn}</td>
        </tr>
      ))}
      </tbody>
      </table> */}
    </div>
    
    
  );
}
