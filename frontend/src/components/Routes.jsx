import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../page/MainPage";
import Community from "../page/Community";

export default function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/community" element={<Community />} />
            </Routes>
        </Router>
    )
}