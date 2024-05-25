const express = require('express');
const router = express.Router();
const Community = require('../models/Community');

router.get('/news', (req, res) => {
  const state = req.query.state;
  const lccn = req.query.lccn;
  // Call the Library of Congress API and filter results by state and lccn
  // Return the filtered results
  // For now return a dummy response
  const news = [
    { title: "News 1", state: "CA", lccn: "123" },
    { title: "News 2", state: "NY", lccn: "456" }
  ];
  const filteredNews = news.filter(item => (!state || item.state === state) && (!lccn || item.lccn === lccn));
  res.json(filteredNews);
});

router.get('/community', (req, res) => {
  Community.find()
    .then(members => res.json(members))
    .catch(err => res.status(400).json({ error: err.message }));
});

router.post('/community', (req, res) => {
  const email = req.body.email;
  const newMember = new Community({ email });
  newMember.save()
    .then(() => res.json({ message: 'Member added' }))
    .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
