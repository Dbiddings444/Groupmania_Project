// src/App.js

import React from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewPostPage from './pages/NewPostPage'
import PostPage from './pages/PostPage'
import ProfilePage from './pages/ProfilePage'
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
      <Route path="/new-post" element={<NewPostPage />} />
      <Route path="/post" element={<PostPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    </Router>
  );
}

export default App;
