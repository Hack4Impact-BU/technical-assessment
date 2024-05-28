import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Community from './components/Community/Community'
import Table_main from './components/Table/Table'

function App() {
  

  return (
    
      <div>
        <Community />
        <Table_main apiEndpoint="https://chroniclingamerica.loc.gov/newspapers.json" />
      </div>
      
    
  )
}

export default App
