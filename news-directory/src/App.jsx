import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import NewsTable from "./components/NewsTable";
import Community from "./components/Community";
import Navbar from "./components/Navbar";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<NewsTable />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
