import React, { useState } from 'react';
import NewspapersTable from '../components/NewspapersTable';
import JoinCommunityForm from '../components/JoinCommunityForm';
import CommunityTable from '../components/CommunityTable.js';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Home() {
  const [view, setView] = useState('newspapers');

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Library of Congress Newspapers
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setView(view === 'newspapers' ? 'community' : 'newspapers')}>
        {view === 'newspapers' ? 'View Community' : 'View Newspapers'}
      </Button>
      {view === 'newspapers' ? (
        <>
          <NewspapersTable />
          <Box mt={4}>
            <JoinCommunityForm />
          </Box>
        </>
      ) : (
        <CommunityTable />
      )}
    </Container>
  );
}
