import React from 'react';
import './NewPostPage.css';
import PostForm from '../components/PostForm'
import headerLogo from '../assets/icon-left-font-monochrome-white.svg'
import { Link } from 'react-router-dom';
const NewPostPage = () => {

  return (
    <div className="new-post-page">
    <header className="homepage-header">
        <div className="nav">
       <Link to='/Home'> <img src={headerLogo}  className='navLogo'alt='nav logo'></img></Link>
        <nav>
          <ul>
          <li><Link to="/profile"><div className='profileContainer'><img src="https://via.placeholder.com/800x400" className='profileImg'></img></div></Link></li>
          </ul>
        </nav>
        </div>
      </header>
      <h2>Create a New Post</h2>
<PostForm/>
    </div>
  );
};

export default NewPostPage;
