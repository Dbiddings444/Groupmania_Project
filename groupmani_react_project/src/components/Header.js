import React from 'react';
import './Header.css'; // Import the CSS file for styling
import headerLogo from '../assets/icon-left-font-monochrome-white.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <Link to="/Home"> <img src={headerLogo} className='navLogo' width="150" height="150" alt='nav logo'></img></Link>
        <nav>
          <ul>
            <li> <Link to="/new-post">Create Post</Link></li>
            <li><Link to="/profile"><div className='profileContainer'><img src="https://via.placeholder.com/800x400" className='profileImg'></img></div></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;