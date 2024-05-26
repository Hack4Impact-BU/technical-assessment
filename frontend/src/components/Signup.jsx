import './Signup.css';
import { useState } from 'react';

function Signup({ addMember }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function processName(e) {
    e.preventDefault();
    addMember(firstName, lastName);
    setFirstName('');
    setLastName('');
  }

  function setFirst(e) {
    setFirstName(e.target.value);
  }

  function setLast(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <form onSubmit={processName}>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={setFirst}
          placeholder='James'
        ></input>
        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={setLast}
          placeholder='Mango'
        ></input>
        <button>Join!</button>
      </form>
    </>
  );
}

export default Signup;
