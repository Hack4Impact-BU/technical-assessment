import React from 'react'
import { useState, useEffect } from 'react'
import './Table.css'
import Table from 'react-bootstrap/Table'   
import axios from 'axios';
import Filter from '../Filter/Filter'

export const Table_main = ({ apiEndpoint }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stateValue, setStateValue] = useState('');
  const [lccnValue, setLccnValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://cors-anywhere.herokuapp.com/${apiEndpoint}`);
        console.log(response.data);
        setData(response.data.newspapers); 
        setFilteredData(response.data.newspapers);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  useEffect(() => {
    console.log(`State Filter: ${stateValue}, LCCN Filter: ${lccnValue}`); // Log filter states

    let filtered = data;

    if (stateValue) {
      filtered = filtered.filter(item => item.state.toLowerCase().includes(stateValue.toLowerCase()));
    }

    if (lccnValue) {
      filtered = filtered.filter(item => item.lccn.toLowerCase().includes(lccnValue.toLowerCase()));
    }

    console.log('Filtered Data:', filtered);
    setFilteredData(filtered);
  }, [stateValue, lccnValue, data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  const handleRowClick = (url) => {
    window.open(url, '_blank');
  };

  const resultMessage = filteredData.length > 0 ? 
    `There are a total of ${filteredData.length} results found` : 
    'There were no results found';

  return (
    <div className="table-border-container">
      <Filter
        stateValue={stateValue}
        setStateValue={setStateValue}
        lccnValue={lccnValue}
        setLccnValue={setLccnValue}
      />
      <div className="table-wrapper">
        <Table responsive bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>State</th>
              <th>LCCN</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index} onClick={() => handleRowClick(`https://chroniclingamerica.loc.gov/lccn/${item.lccn}`)} style={{ cursor: 'pointer' }}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.state}</td>
                <td>{item.lccn}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <p className="table-row-count">{resultMessage}</p>
    </div>
        
    );
  }
  
  export default Table_main;