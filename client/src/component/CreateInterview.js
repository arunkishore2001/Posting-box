import React from 'react';
import './CreateInterview.css'; 

function CreateInterview() {
  return (
    <div className="app-container">
    {/* Navbar */}
    <nav className="navbar">
      <div className="logo">Covette</div>
      <div className="contact">
        <span>Contact</span>
        <div className="dropdown">
          <button className="dropdown-toggle">Your Name</button>
        </div>
      </div>
    </nav>

    {/* Sidebar */}
    <aside className="sidebar">
      <div className="sidebar-icon home-icon">
        <span>&#8962;</span> 
      </div>
    </aside>

    {/* Main content */}
    <main className="main-content">
      <CreateInterview /> 
    </main>
  </div>
  );
}

export default CreateInterview;
