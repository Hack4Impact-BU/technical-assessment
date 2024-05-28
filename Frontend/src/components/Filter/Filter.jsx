// src/components/Filter/Filter.jsx

import React from 'react';
import './Filter.css';

const Filter = ({ stateValue, setStateValue, lccnValue, setLccnValue }) => {
  return (
    <div className="filter-container">
      <label htmlFor="state-filter" className="filter-label">Search by State:</label>
      <input
        id="state-filter"
        type="text"
        value={stateValue}
        onChange={e => setStateValue(e.target.value)}
        placeholder="Enter state"
        className="filter-input"
      />
      <label htmlFor="lccn-filter" className="filter-label">Search by LCCN:</label>
      <input
        id="lccn-filter"
        type="text"
        value={lccnValue}
        onChange={e => setLccnValue(e.target.value)}
        placeholder="Enter LCCN"
        className="filter-input"
      />
    </div>
  );
};

export default Filter;
