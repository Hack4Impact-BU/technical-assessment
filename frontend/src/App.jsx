
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from './pages/Community';
import Data from './pages/Data';
import NavBar from "./components/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/community" element={<CommunityPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}


export default App;
