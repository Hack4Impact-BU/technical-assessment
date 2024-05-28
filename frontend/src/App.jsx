import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './pages/News'
import Community from './pages/Community'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<News />} />
        <Route path="/news" element={<News />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
