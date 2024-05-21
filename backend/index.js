import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Email } from './models/Email.js';
import axios from 'axios'
import { PORT, mongoDBURL } from './config.js';


const app = express();

app.use(cors());
app.use(express.json()); 

app.get('/newspapers', async (req, res) => {
  try {
    const response = await axios.get('https://chroniclingamerica.loc.gov/newspapers.json');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.post('/emails', async (req, res) => {

  try {
    if (!req.body.name || !req.body.email) {
      return res.status(400).send({
        message: 'Send all required fields'
      });
    }

    const newEmail = {
      name: req.body.name,
      email: req.body.email
    };

    const email = await Email.create(newEmail); 
    res.status(201).send(email); 
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
});


app.get('/emails', async (req, res) => {
    try {
      const emails = await Email.find({});
      return res.status(200).json(emails)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
  });
