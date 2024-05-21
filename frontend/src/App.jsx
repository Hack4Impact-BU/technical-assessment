import { useState, useEffect } from 'react'


import './App.css'
import Header from './header/header'
import Filter from './filter/filter'
// import Tablee from './table/table'


function App() {
  const [count, setCount] = useState(0)

  const [fullData, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:5174/news');
          const data = await res.json();
          setData(data)
        } catch (error) {
          setError(error);
          console.log("error something happened");
        }
      }
      fetchData();
    }, [])

    console.log(fullData.newspapers[0])

  return (
    <>
      <Header />
      <p>
        {fullData.newspapers[0].state}
      </p>
      <Filter />
    </>
  )
}

export default App
