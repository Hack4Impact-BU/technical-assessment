import React from 'react';
import NewspapersTable from '../components/NewspapersTable';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Library of Congress Newspapers
      </Typography>
      <NewspapersTable />
    </Container>
  );
}
