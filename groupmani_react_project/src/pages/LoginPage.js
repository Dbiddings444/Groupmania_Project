// src/components/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import loginPic from '../assets/ayrus-hill-qiuk_20KbKM-unsplash.jpg';
import loginIcon from '../assets/icon-above-font.png'
const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your back-end authentication code here
    if (username === 'admin' && password === 'admin') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your back-end user creation code here
    if (password === confirmPassword) {
      alert('User created successfully');
      setActiveTab('login');
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <div className="login-page">
      
      <div className="login-container">
        <div className="login-box">
        <img className='logo' alt='company logo for login'src={loginIcon}></img>
          {activeTab === 'login' && (
            <>
              <h2>Welcome Back</h2>
              <p className='welcomeMessage'>Welcome Back, Please enter your details</p>
              <div className="tabs">
            <button
              className={activeTab === 'login' ? 'active' : ''}
              id='left'
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={activeTab === 'signup' ? 'active' : ''}
              id='right'
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>
              <form onSubmit={handleLogin}>
                <div className="input-group">
                  <label htmlFor="username">Your Username</label>
                  <input
                    type="text"
                    id="username"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Your Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className='submit'>Login</button>
              </form>
            </>
          )}
          {activeTab === 'signup' && (
            <>
              <h2>Sign Up</h2>
              <p className='welcomeMessage'>So excited for you to join us, enter your info below</p>
              <div className="tabs">
            <button
              className={activeTab === 'login' ? 'active' : ''}
              id='left'
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={activeTab === 'signup' ? 'active' : ''}
              id='right'
              onClick={() => setActiveTab('signup')}
            >
              Sign Up
            </button>
          </div>
              <form onSubmit={handleSignup}>
                <div className="input-group">
                  <label htmlFor="username">Your Username</label>
                  <input
                    type="text"
                    id="username"
                     placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="password">Your Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder='min 8 characters'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="confirmPassword">Confirm Your Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className='submit'>Sign Up</button>
              </form>
            </>
          )}
        </div>
        <div className="image-container">
          <img src={loginPic} alt="Description" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
