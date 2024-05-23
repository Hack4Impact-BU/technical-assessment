import { useState, useEffect } from 'react'


import './App.css'
import Header from './components/header/header'
import BasicTable from './components/table/table'
import Usertable from './components/usertable/usertable'
import FilterInput from './components/filterinput/filterinput'
import UserInput from './components/userinput/userinput'


function App() {
  
  //useState to store fetched news data
  const [news, setData] = useState([])

  //users store array of BOTH name and email
  const [users, setUsers] = useState([])

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


    //storing data so it can pass in userTable
    useEffect(() => {
      fetch('http://localhost:5174/user')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
    }, [])



    function addUser() {

      //grab the date in string form
      let today = new Date();
      let formattedDate = today.toISOString().slice(0, 10);
      let formattedTime = today.toTimeString().slice(0, 8); // Extracts HH:MM:SS from the time string
      let formattedDateTime = `${formattedDate} ${formattedTime}`;
      //return early if username or email is empty
      if (username === '' || email === '') return

      fetch('http://localhost:5174/add-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: username, email: email, dateJoined: formattedDateTime})
      }).then(res => console.log(res))

      const newUser = {
        name: username,
        email: email,
        dateJoined: formattedDateTime
      }

      //this is for dymanic rendering, dont need refresh
      setUsers([...users, newUser])
      setUsername('');
      setEmail('');
    }
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


      <UserInput
       username={username}
       setUsername={setUsername}
       email={email}
       setEmail={setEmail}
       addUser={addUser}
      />
      <Usertable users={users}/>

      <FilterInput 
       stateinput={stateinput}
       setStateInput={setStateInput}
       lccninput={lccninput}
       setLccnInput={setLccnInput}
        />
      
      {/* pass in the search inputs filter  */}
      <BasicTable news={news} stateinput={stateinput} lccninput={lccninput} />
    </>
  )
}

export default App
