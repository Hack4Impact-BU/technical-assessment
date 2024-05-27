import './Community.css';
import Signup from './components/Signup';
import { useState } from 'react';

function Community() {
  const [members, setMembers] = useState([]);

  function addMember(name, email) {
    const today = new Date();
    const newMem = {
      name,
      email,
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
          <p>Name</p>
          <p>E-mail</p>
          <p>Date</p>
        </div>
        {members.map((member) => (
          <div key={member.id} className='member-div'>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.date}</p>
          </div>
        ))}
        <div className='sort-item'></div>
      </div>
    </>
  );
}

export default Community;
