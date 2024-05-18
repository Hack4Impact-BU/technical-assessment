import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState([])
  const [newspapers, setNewspapers] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api/users")
    setArray(response.data.users)
  }

  const fetchNews = async () => {
    const response = await axios.get("http://localhost:8080/api/news")
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
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
