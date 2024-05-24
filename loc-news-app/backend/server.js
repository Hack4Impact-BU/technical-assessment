const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb+srv://mebattll:kRo8cb5QmKnD9eoj@cluster0.5zg7ohn.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for users
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to add a new user
app.post('/api/join', async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = new User({ firstName, lastName, email });
  await newUser.save();
  res.status(201).json(newUser);
});

// API endpoint to get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
