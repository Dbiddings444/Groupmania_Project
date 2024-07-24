// src/components/LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
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
      setIsLogin(true);
    } else {
      alert('Passwords do not match');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="login-page">
      <div className="login-box">
        {isLogin ? (
          <>
            <h2>User Login</h2>
            <p className='details'>Hey, Enter your details to sign into your account</p>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  defaultValue={"UserName"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <span className='details_link' onClick={toggleForm}>Sign Up</span>
            </p>
          </>
        ) : (
          <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <span className='details_link'  onClick={toggleForm}>Login</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
