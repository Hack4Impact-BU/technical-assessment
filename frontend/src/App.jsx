import { useState, useEffect } from 'react'


import './App.css'
import Header from './header/header'
import Filter from './filter/filter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <p>
        hellow
      </p>
      <Filter />
    </>
  )
}

export default App
