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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>News</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <div>
          {
            newspapers.map((newspaper, index) =>(
              <div key={index}>
                <h2>{newspaper.title}</h2>
                <p>{newspaper.state}</p>
              </div>
            ))
          }
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
