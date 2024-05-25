const mongoose = require('mongoose');

const CommunitySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model('Community', CommunitySchema);
