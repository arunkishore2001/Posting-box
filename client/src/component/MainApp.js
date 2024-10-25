import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InterviewPage from './InterviewPage';
import './MainApp.css';

function MainApp() {
  const [userName, setUserName] = useState('');
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/user/{userID}`); 
        setUserName(response.data.name);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="main-app-container">
      <nav className="navbar">
        <div className="logo">Covette</div>
        <div className="contact">
          <span>Contact</span>
          <div className="dropdown">
            <button className="dropdown-toggle">{userName}</button>
          </div>
        </div>
      </nav>

      <aside className="sidebar">
        <div className="sidebar-icon home-icon">
          <span>&#8962;</span>
        </div>
      </aside>

      <main className="main-content">
        <InterviewPage />
      </main>
    </div>
  );
}

export default MainApp;
