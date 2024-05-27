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
      newspapers = newspapers.filter(item => item.state === state);
    }

    if (lccn) {
      newspapers = newspapers.filter(item => item.lccn === lccn);
    }

    res.json(newspapers);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/community', async (req, res) => {
  try {
    const members = await Community.find();
    res.json(members);
  } catch (err) {
    console.error('Error fetching community:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/community', async (req, res) => {
  const email = req.body.email;
  try {
    const newMember = new Community({ email });
    await newMember.save();
    res.json({ message: 'Member added' });
  } catch (err) {
    console.error('Error adding community member:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;