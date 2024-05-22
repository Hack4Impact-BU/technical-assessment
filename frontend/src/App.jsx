import { useState, useEffect } from 'react'


import './App.css'
import Header from './header/header'
import Filter from './filter/filter'
import BasicTable from './table/table'


function App() {
  
  //useState to store fetched data
  const [news, setData] = useState([])

  const [loading, setLoading] = useState(true);

  //originally did the .then() way but decided to do this
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:5174/news');
          const data = await res.json();
          setData(data)
          setLoading(false);
          console.log("fetched data")
        } catch (error) {
          console.log("Error: ", error)
          setLoading(false);
        }
      };
      fetchData();
    }, [])

  //ANNOYING ISSUE
  //set a loading page so that api can be fetched properly
  //before accessing the json data
  //so that it doesn't run into error 
  if (loading) {
    return <div>Loading...</div>
  }

  return (

  
    <>
      <Header />
      <Filter />
      <BasicTable news={news}/>
    </>
  )
}

export default App
