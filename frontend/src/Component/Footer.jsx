
import React from 'react';
import './Footer.css';
import { text } from 'figlet';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src="../../public/logo.png" alt="" className="footer-logo" />
          <p>Teacher Sign In</p>
          <p>Student Exam Key</p>
          <p className="footer-contact-title">Want to get in touch?</p>
          <a href="#" >Support Site</a>
          <a href="mailto:info@exam.net">TestNest.com</a>
          {/* <div className="footer-badges">
            <img src="" alt="Capterra" />
            <img src="" alt="GetApp" />
          </div> */}
        </div>

        <div className="footer-columns">
          <div>
            <h4>How it works</h4>
            <ul>
              <li>Product overview</li>
              <li>Tools</li>
              <li>Technology</li>
              <li>LMS Integrations</li>
              <li>Cheating</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h4>Customers</h4>
            <ul>
              <li>Case Studies</li>
            
              <li>Testimonials</li>
              <li>Practice Tests</li>
              <li>Sample Questions</li>
              <li>Exam Guidelines</li>
              <li>Scoring & Results</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4>Who we serve</h4>
            <ul>
              <li>Schools</li>
              <li>Higher education</li>
              <li>Institutes</li>
              <li>Companies & Organizations</li>
              <li>Regions</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Support</li>
              <li>Privacy Center</li>
              <li>About</li>
              <li>Blog</li>
              <li>Training Videos</li>
              <li>Service Status</li>
              <li>Install high security mode</li>
            </ul>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        
        <p >Copyright © 2025 –TestNest</p>
      </div>
    </footer>
  );
}

export default Footer;
