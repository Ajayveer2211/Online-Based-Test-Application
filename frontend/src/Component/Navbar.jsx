import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand-name">TestNest </span>
      </div>

      <div className="navbar-center">
       <Link to="/">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/features">Features</Link>
      </div>

      <div className="navbar-right">
        <div className="exam-key">
          <input type="text" placeholder="Student Exam Key" />
          <button className="arrow-btn">→</button>
        </div>
        <Link to="/login"><button className="signup-btn">Log In</button></Link>
        
        <Link to="/register" className="btn btn-primary-custom btn-nav">
                    Get Started
        </Link>
      </div>
    </nav>
   



   
  );
};

export default Navbar;
