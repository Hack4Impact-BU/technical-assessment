import { useState, useEffect } from 'react'
import './MainPage.css'


import Header from '../components/header/header'
import BasicTable from '../components/table/table'
import FilterInput from '../components/filterinput/filterinput'
import Footer from '../components/footer/footer'


function MainPage() {
  
  //useState to store fetched news data
  const [news, setData] = useState([])

  //used for loading screen
  const [loading, setLoading] = useState(true);

  //state filtering input
  const [stateinput, setStateInput] = useState('');

  //lccn filtering input
  const [lccninput, setLccnInput] = useState('');


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

  // grab name and email
  // console.log(users[0].name);
  // console.log(users[0].email);

  // --------------------------------------------------------------------
  return (
    <>
      <Header />
      <FilterInput 
       stateinput={stateinput}
       setStateInput={setStateInput}
       lccninput={lccninput}
       setLccnInput={setLccnInput}
        />
      {/* pass in the search inputs filter  */}
      <BasicTable news={news} stateinput={stateinput} lccninput={lccninput} />

      <Footer />
    </>
  )
}

export default MainPage
