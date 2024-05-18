import React from 'react';
import NewspapersTable from '../components/NewspapersTable';
import JoinCommunityForm from '../components/JoinCommunityForm';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Library of Congress Newspapers
      </Typography>
      <NewspapersTable />
      <Box mt={4}>
        <JoinCommunityForm />
      </Box>
    </Container>
  );
}
