import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [newspapers, setNewspapers] = useState([]);
  const [state, setStates] = useState([]);
  const [select, setSelect] = useState('');

  // http://127.0.0.1:8000/api/news view
  const fetchNews = async () => {
    const response = await axios.get('http://localhost:8000/api/news');
    console.log(response.data);
    const newspapers = response.data.newspapers;
    setNewspapers(newspapers);
    // make array for dropdown filter
    const onlyStates = newspapers.map((news) => news.state);
    const uniqueState = Array.from(new Set(onlyStates));
    setStates(uniqueState);
  };

  // run everytime new render
  useEffect(() => {
    fetchNews();
  }, []);

  // new filtered array
  let selectedNewsDisplay;

  if (select === '') {
    selectedNewsDisplay = newspapers;
  } else {
    selectedNewsDisplay = newspapers.filter((news) => news.state === select);
  }

  return (
    <>
      <div className='head-bar'>
        <h2>News</h2>
      </div>
      <div className='news'>
        {/* selection button, set value to select */}
        <select
          className='selectButton'
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option value=''>All States</option>
          {state.map((each) => (
            <option key={each} value={each}>
              {each}
            </option>
          ))}
          <FontAwesomeIcon icon={faArrowDown} />
        </select>
        {/* news box */}
        <div className='grid-container'>
          {selectedNewsDisplay.map((newspaper, index) => (
            <div key={index} className='grid-item'>
              <h4>{newspaper.title}</h4>
              <p>{newspaper.lccn}</p>
              <p>{newspaper.state}</p>
              <p>{newspaper.url}</p>
            </div>
          ))}
        </div>
      </div>
      <p className='read-the-docs'></p>
    </>
  );
}

export default App;
