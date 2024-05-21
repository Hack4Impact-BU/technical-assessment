import { useState, useEffect } from 'react'


import './App.css'
import Header from './header/header'
import Filter from './filter/filter'
import BasicTable from './table/table'


function App() {
  
  
  const [news, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:5174/news');
          const data = await res.json();
          setData(data)
          console.log("fetched data")
        } catch (error) {
          console.log("Error: ", error)
        }
      };
      fetchData();
    }, [])


  return (

  
    <>
      <Header />
      <p>
          {news.newspapers && news.newspapers.length > 0 
            ? news.newspapers[0].state 
            : "Loading..."}
      </p>
      <Filter />
      <BasicTable />
    </>
  )
}

export default App
