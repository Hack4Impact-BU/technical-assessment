import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from './header/header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <p>
        hellow
      </p>
    </>
  )
}

export default App
