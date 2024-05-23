import { useState, useEffect } from 'react'


import './App.css'
import Header from './components/header/header'
import BasicTable from './components/table/table'


function App() {
  
  //useState to store fetched data
  const [news, setData] = useState([])

  //used for loading screen
  const [loading, setLoading] = useState(true);

  //state filtering input
  const [stateinput, setStateInput] = useState('');

  //lccn filtering input
  const [lccninput, setLccnInput] = useState('');

  //name for community input
  const [username, setUsername] = useState('');

  //email for community input
  const [email, setEmail] = useState('');

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


  // --------------------------------------------------------------------
  return (
    <>
      <Header />


      <section className='community'>
        <div className="name">
          <input type='text' placeholder="enter name"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
           />
        </div>

        <div className="email">
          <input type='text' placeholder="enter email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           />
        </div>
      
        <br></br>

      </section>
      <section className="filter">
            <div className="USStates">
                <input type="text" placeholder="enter state"
                //stateinput is the useState array declared earlier
                 value={stateinput}
                 onChange={(e) => setStateInput(e.target.value)}
                 />
            </div>

            <div className="lccn">
                <input type="text" placeholder="enter lccn"
                 value={lccninput}
                 onChange={(e) => setLccnInput(e.target.value)}
                />
            </div>
      </section>
      

      {/* pass in the search inputs filter  */}
      <BasicTable news={news} stateinput={stateinput} lccninput={lccninput} />
    </>
  )
}

export default App
