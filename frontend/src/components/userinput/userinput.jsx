import React from "react";
import './userinput.css';

export default function UserInput( {username, setUsername, email, setEmail, addUser} ){



    return (

        <section className='communityInput'>
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
      
            <div className='addButton'>
                <button type='Button' onClick={addUser}>join community</button>
            </div>
        </section>

    );
}