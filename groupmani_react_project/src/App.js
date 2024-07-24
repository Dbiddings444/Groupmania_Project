// src/App.js

import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
// import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
    </Router>
  );
}

export default App;
