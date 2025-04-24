
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Portrait Art Hub</h3>
          <p className="footer-text">
            Transforming your memories into timeless works of art.
          </p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/art-listing">Art Listing</a></li>
            <li><a href="/order-form">Order Form</a></li>
            <li><a href="/about">About/Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">Email: info@portraitarthub.com</p>
          <p className="footer-text">Phone: (555) 123-4567</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Portrait Art Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
