// src/components/Community/Community.jsx

import React, { useState } from 'react';
import './Community.css';

const Community = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onSubmit({ name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <div className="community-container">
      <h2>Join the Community</h2>
      <form onSubmit={handleSubmit} className="community-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Join</button>
      </form>
    </div>
  );
};

export default Community;

