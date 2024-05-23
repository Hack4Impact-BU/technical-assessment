import './App.css'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Table from './components/table/table'
import Info from './components/info/info'
import Community from './components/community/community'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return(
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element = {<Table/>}/>
          <Route path="/community" element = {<Community/>}/>
          <Route path="/info" element = {<Info/>}/>
        </Routes>
        <div className = 'separator'></div>
        <Footer/>
      </div>
    </Router>
)}
export default App
