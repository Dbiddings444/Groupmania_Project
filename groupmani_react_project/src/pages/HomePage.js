// src/HomePage.js

import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import headerLogo from '../assets/icon-left-font-monochrome-white.svg'
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard'
const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="nav">
        <Link to="/Home"> <img src={headerLogo}  className='navLogo' width="150" height="150"alt='nav logo'></img></Link>
        <nav>
          <ul>
          <li> <Link to="/new-post">New Post</Link></li>
            <li><a href="#contact">User Profile</a></li>
          </ul>
        </nav>
        </div>
      </header>
      <main className="homepage-main">
        <section className="intro">
          <h2>Featured Post</h2>
          <div className='card-container'>
          <PostCard/>
          {/* <PostCard/> */}
          </div>
        </section>
        <section className="features">
          
          <div></div>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
