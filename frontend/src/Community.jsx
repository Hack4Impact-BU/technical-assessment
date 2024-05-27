import './Community.css';
import Signup from './components/Signup';
import { useState } from 'react';

function Community() {
  const [members, setMembers] = useState([]);

  function addMember(firstName, lastName) {
    const today = new Date();
    const newMem = {
      firstName,
      lastName,
      date: `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`,
    };
    setMembers((members) => [...members, newMem]);
  }

  return (
    <>
      <div className='head-bar'>
        <h2>Community</h2>
      </div>
      <Signup addMember={addMember} />
      <div className='community-grid'>
        <div className='sort-grid'>
          <p>First Name</p>
          <p>Last Name</p>
          <p>Date</p>
        </div>
        {members.map((member) => (
          <div key={member.id} className='member-div'>
            <p>{member.firstName}</p>
            <p>{member.lastName}</p>
            <p>{member.date}</p>
          </div>
        ))}
        <div className='sort-item'></div>
      </div>
    </>
  );
}

export default Community;
