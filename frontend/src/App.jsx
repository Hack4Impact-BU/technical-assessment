import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [newspapers, setNewspapers] = useState([])

  // http://127.0.0.1:8000/api/news view
  const fetchNews = async () => {
    const response = await axios.get("http://localhost:8000/api/news")
    console.log(response.data)
    setNewspapers(response.data.newspapers)
  }

  // run once
  useEffect(() => {
    fetchNews()
  },[])

  return (
    <>
      <div className='head-bar'>
        <h2>News</h2>
      </div>
      <div className='grid-container'>
        {newspapers.map((newspaper, index) =>(
          <div key={index} className='grid-item'>
            <h4>{newspaper.title}</h4>
            <p>{newspaper.lccn}</p>
            <p>{newspaper.state}</p>
            <p>{newspaper.url}</p>
          </div>
        ))}
      </div>
      <p className="read-the-docs">
      </p>
    </>
  )
}

export default App
