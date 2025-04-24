
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Portrait Art Hub
        </Link>
        
        <div className="navbar-search">
          <input
            type="text"
            placeholder="SEARCH"
            className="search-input"
          />
        </div>
        
        <div className="navbar-links">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/art-listing" className={isActive("/art-listing")}>
            Art Listing
          </Link>
          <Link to="/order-form" className={isActive("/order-form")}>
            Order Form
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About/Contact
          </Link>
        </div>
        
        <div className="navbar-auth">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
