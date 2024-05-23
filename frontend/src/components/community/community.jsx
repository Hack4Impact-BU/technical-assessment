import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState, useEffect} from 'react'
import './community.css'

const PORT = import.meta.env.VITE_PORT;
export default function Community() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({name: '', email: '', dateJoined: ''});

  // Read users from MongoDB
  useEffect(() => {
    fetch(`${PORT}/users`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUsers(data)
      })
  }, [])

  // Add user to database
  function addUser() {
    if (!newUser.name || !newUser.email) return;

    const date = new Date().toISOString()
    const userSubmit = {...newUser, dateJoined: date}

    fetch(`${PORT}/add-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userSubmit)
    })
      .then(res => res.json())
      .then(data => {
        setUsers((updatedUser) => [data, ...updatedUser])
        setNewUser({name: '', email: '', dateJoined: ''})
      })
  }

  return (
    <TableContainer className = "community-table" component={Paper}>
    <div className = "header">
        Our Community
    </div>
    <div className = "subheader">
        Join our Mailing List!
    </div>
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
            label="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <TextField
            label="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={addUser}>
          Join Now!
      </Button>
    </Box>
    <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className = "table-name">Name</TableCell>
              <TableCell className = "table-email">
                <TableSortLabel>Email</TableSortLabel>
              </TableCell>
              <TableCell align= "right">Date Joined</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((users) => (
              <TableRow key={users._id}>
                <TableCell component="th" scope="row">
                  {users.name}
                </TableCell>
                <TableCell className = "userEmail">{users.email}</TableCell>
                <TableCell align="right">{new Date(users.dateJoined).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
  );
}

