import React from 'react'
import { useState, useEffect } from 'react'
import './Table.css'
import Table from 'react-bootstrap/Table'   
import axios from 'axios';

export const Table_main = ({ apiEndpoint }) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://cors-anywhere.herokuapp.com/${apiEndpoint}`);
            setData(response.data.newspapers); 
            setIsLoading(false);
          } catch (error) {
            setError(error);
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, [apiEndpoint]);
    
      if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error fetching data: {error.message}</p>;
      }
    
      return (
        <div className="table-border-container">
          <div className="table-wrapper">
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>State</th>
                  <th>LCCN</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.state}</td>
                    <td>{item.lccn}</td>
                    <td>
                      <a href={`https://chroniclingamerica.loc.gov/lccn/${item.lccn}`} target="_blank" rel="noopener noreferrer">
                        Visit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          <p className="table-row-count">There are a total of {data.length} results found</p>
        </div>
        
    );
  }
  
  export default Table_main;