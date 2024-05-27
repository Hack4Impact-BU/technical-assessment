import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import axios from 'axios';
import Filters from './components/Filters.jsx';
import NewsDirectory from './components/NewsDirectory.jsx';
import Community from './components/Community.jsx';

function App() {
  const [news, setNews] = useState([]);
  const [state, setState] = useState('');
  const [lccn, setLccn] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [community, setCommunity] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/news', { params: { state, lccn } });
      setNews(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const fetchCommunity = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/community');
      setCommunity(response.data);
    } catch (error) {
      console.error('Error fetching community:', error);
    }
  };

  const handleEmailSubmit = async () => {
    try {
      await axios.post('http://localhost:5001/api/community', { name, email });
      fetchCommunity();
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchCommunity();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Playfair Display, sans-serif',
      h6: {
        fontSize: '1.25rem',
        fontWeight: '600',
      },
      h4: {
        fontSize: '2rem',
        fontWeight: '600',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <nav style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
            <Link to="/" style={{ marginRight: '30px', textDecoration: 'none' }}>
              <Typography variant="h6" color="primary">News Directory</Typography>
            </Link>
            <Link to="/community" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="primary">Community</Typography>
            </Link>
          </nav>
          <Routes>
            <Route path="/" element={
              <>
                <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                  News Directory
                </Typography>
                <Filters state={state} setState={setState} lccn={lccn} setLccn={setLccn} fetchNews={fetchNews} />
                <NewsDirectory news={news} />
                <Typography variant="h4" gutterBottom style={{ marginTop: '30px' }}>
                  Join Our Community!
                </Typography>
                <Grid container spacing={2} alignItems="center" style={{ marginBottom: '50px' }}>
                  <Grid item xs={12} sm={4.5}>
                    <TextField
                      id="name-input"
                      name="name"
                      label="Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      fullWidth
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={4.5}>
                    <TextField
                      id="email-input"
                      name="email"
                      label="Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      fullWidth
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleEmailSubmit}
                      fullWidth
                      style={{ height: '56px', marginTop: '10px' }}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
              </>
            } />
            <Route path="/community" element={
              <>
                <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>
                  Community
                </Typography>
                <Community community={community} />
              </>
            } />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
