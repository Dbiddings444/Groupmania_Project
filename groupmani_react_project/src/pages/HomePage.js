import React from 'react';
import './HomePage.css'; // Import the CSS file for styling
import PostCard from '../components/PostCard'
import Header from '../components/Header'
const HomePage = () => {
  return (
    <div className="homepage">
       <Header/>
      <main className="homepage-main">
        <section className="intro">
          <h2>Featured Post</h2>
          <div className='card-container'>
          <PostCard/>
          </div>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
