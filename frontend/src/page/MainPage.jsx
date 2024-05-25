import { useState, useEffect } from 'react'
import './MainPage.css'


import Header from '../components/header/header'
import BasicTable from '../components/table/table'
import FilterInput from '../components/filterinput/filterinput'
import Footer from '../components/footer/footer'
import Words from '../components/words/words'


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
          const res = await fetch('stateline-news-production.up.railway.app/news');
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
    return <div className='container'><p className='loading'>Loading...</p></div>
  }

  // grab name and email
  // console.log(users[0].name);
  // console.log(users[0].email);

  // --------------------------------------------------------------------
  return (
    <>
      <Header />
      <div className="seperator"></div>
      <Words />
      <div className="seperator"></div>
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
