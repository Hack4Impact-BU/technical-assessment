import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';
import Filters from './components/Filters.jsx';
import NewsDirectory from './components/NewsDirectory.jsx';
import Community from './components/Community.jsx';

function App() {
  const [news, setNews] = useState([]);
  const [state, setState] = useState('');
  const [lccn, setLccn] = useState('');
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
      await axios.post('http://localhost:5001/api/community', { email });
      fetchCommunity();
    } catch (error) {
      console.error('Error submitting email:', error);
    }
  };

  useEffect(() => {
    fetchNews();
    fetchCommunity();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>News Directory</Typography>
      <Filters state={state} setState={setState} lccn={lccn} setLccn={setLccn} fetchNews={fetchNews} />
      <NewsDirectory news={news} />
      <Typography variant="h4" gutterBottom>Join Our Community</Typography>

      <TextField
        id="email-input"
        name="email"
        label="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleEmailSubmit}>
        Join Now!
      </Button>
      <Community community={community} />
    </Container>
  );
}

export default App;
