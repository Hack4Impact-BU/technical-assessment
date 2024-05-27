const express = require('express');
const axios = require('axios');
const router = express.Router();
const Community = require('../models/Community');

router.get('/news', async (req, res) => {
  const { state, lccn } = req.query;
  try {
    const response = await axios.get('https://chroniclingamerica.loc.gov/newspapers.json');
    let newspapers = response.data.newspapers;

    if (state) {
      newspapers = newspapers.filter(item => item.state.toLowerCase() === state.toLowerCase());
    }

    if (lccn) {
      newspapers = newspapers.filter(item => item.lccn.toLowerCase().includes(lccn.toLowerCase()));
    }

    res.json(newspapers);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Add a new community member
router.post('/community', async (req, res) => {
  const { name, email } = req.body;
  console.log('Incoming data:', { name, email }); // Log the incoming data
  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  try {
    const newMember = new Community({ name, email });
    await newMember.save();
    res.status(201).json({ message: 'Community member added' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding community member', error });
  }
});

// Get all community members
router.get('/community', async (req, res) => {
  try {
    const members = await Community.find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching community members', error });
  }
});

module.exports = router;
