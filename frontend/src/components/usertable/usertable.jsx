import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './usertable.css';
export default function Usertable({users}) {

    return (
        <>
        <div className="table">
            <Paper className='paper'>
                <TableContainer className='tableContainer'>
                    <Table className='MuiTable-root'>
                        <TableHead className="th">
                            <TableRow className='thr'>
                                <TableCell className='tableCellNameH' align='left'>name</TableCell>
                                <TableCell className='tableCellEmailH' align='left'>email</TableCell>
                                <TableCell className='tableCellDateJoinedH' align='left'>date joined</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {users.map(user => (
                                <TableRow hover role ="checkbox" tabIndex={-1} key={user.id}>
                                    <TableCell className='tableCellName' align = 'left'>{user.name}</TableCell>
                                    <TableCell className='tableCellEmail' align = 'left'>{user.email}</TableCell>
                                    <TableCell className='tableCellDateJoined' align = 'left'>{user.dateJoined}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
        </>
    );
}
