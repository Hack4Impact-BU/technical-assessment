import React from "react";
import { useState, useEffect } from 'react'

import "./Community.css";
import Header from '../components/header/header'
import Usertable from '../components/usertable/usertable'
import UserInput from '../components/userinput/userinput'
import Footer from '../components/footer/footer'

export default function Community() {


    //users store array of BOTH name and email
    const [users, setUsers] = useState([])

    //used for loading screen
    const [loading, setLoading] = useState(true);

    //name for community input
    const [username, setUsername] = useState('');

    //email for community input
    const [email, setEmail] = useState('');


    //storing userdata so it can pass in userTable
    useEffect(() => {
        fetch('https://stateline-news-production.up.railway.app/user')
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
  
        try {
          fetch('https://stateline-news-production.up.railway.app/add-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: username, email: email, dateJoined: formattedDateTime})
          }).then(res => console.log(res))
        } catch (error) {
          console.log("Error adding", error);
        }
  
        const newUser = {
          name: username,
          email: email,
          dateJoined: formattedDateTime
        }
        //this is for instant rendering so dont need refresh to see
        setUsers([...users, newUser])
        setUsername('');
        setEmail('');
      }


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
        
        <div className="seperator"></div>
        <Usertable users={users}/>
        <Footer />
        </>

    )
}