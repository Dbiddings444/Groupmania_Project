// src/HomePage.js

import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import headerLogo from '../assets/icon-left-font-monochrome-white.png'
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="nav">
        <img src={headerLogo} width="150" height="150"alt='nav logo'></img>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">User Profile</a></li>
            <li><a href="#contact">+ new post</a></li>
          </ul>
        </nav>
        </div>
      </header>
      <main className="homepage-main">
        <section className="intro">
          <h2>Featured Post</h2>
          
        </section>
        <section className="features">
          <h2>Recent Post </h2>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
