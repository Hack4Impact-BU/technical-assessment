import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import Title from './components/title/title'
import Filter from './components/filter/filter'
import Table from './components/table/table'
import Input from './components/input/input'

function App() {
  const [data, setData] = useState([])
  const [state, setState] = useState('')
  const [lccn, setLCCN] = useState('')

  function getState(value) {
    if (value !== null)
      setState(value)
    else
      setState('')
  }
  function getLCCN(value) {
    if (value !== null)
      setLCCN(value)
    else
      setLCCN('')
  }

  useEffect(() => {
    fetch('http://localhost:3000/newspapers')
        .then(res => res.json())
        .then(data => {
            let newData = []
            for (let i = 0; i < data.newspapers.length; i++)
                newData.push(data.newspapers[i])
            setData(newData)
        })
  }, [])

  return (
    <>
      <Title />
      <p className='info first'>Using this resource, you can look up information on the <i>Chronicling America</i> database provided by the Library of Congress. You can filter results by state and LCCN by using the selection menu.</p>
      <p className='info'>Click on a row to access more info about the newspaper on the database. The titles in the table have been adjusted for readability; hover over them to view the original title from the database.</p>
      <Filter data={data} sendState={getState} sendLCCN={getLCCN} />
      <Table data={data.filter((value) => (value.state == state || state == '') && (value.lccn.substring(0, lccn.trim().length) == lccn.trim().toLowerCase() || lccn == ''))} />
      <h1 className='info'><span className='info' onClick={() => window.open('community', '_self')}>Join Our Community</span></h1>
      <p className='info'>You can join our community by entering your name and email in the boxes below. Please note that your information will be publicly accessible on our community page upon submission.</p>
      <Input />
    </>
  )
}

export default App
