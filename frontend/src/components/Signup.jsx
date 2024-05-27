import './Signup.css';
import { useState } from 'react';

function Signup({ addMember }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function processName(e) {
    e.preventDefault();
    addMember(name, email);
    setName('');
    setEmail('');
  }

  function setNames(e) {
    setName(e.target.value);
  }

  function setEmails(e) {
    setEmail(e.target.value);
  }

  return (
    <>
      <form onSubmit={processName}>
        <label htmlFor='Name'>Name:</label>
        <input
          type='text'
          id='Name'
          value={name}
          onChange={setNames}
          placeholder='James Hook'
          required
        ></input>
        <label htmlFor='email'>E-mail:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={setEmails}
          placeholder='abc@bu.edu'
          required
        ></input>
        <button>Join!</button>
      </form>
    </>
  );
}

export default Signup;
