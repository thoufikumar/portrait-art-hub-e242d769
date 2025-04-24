
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
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
        
        <div className="navbar-links">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/art-listing" className={isActive("/art-listing")}>
            Gallery
          </Link>
          <Link to="/order-form" className={isActive("/order-form")}>
            Custom Orders
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About Me
          </Link>
        </div>
        
        <div className="navbar-auth">
          <Link to="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
