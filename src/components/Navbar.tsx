
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Portrait Art Hub
        </Link>
        
        <div className="navbar-search">
          {isAuthenticated && (
            <input
              type="text"
              placeholder="SEARCH"
              className="search-input"
            />
          )}
        </div>
        
        <div className="navbar-links">
          <Link to="/" className={isActive("/")}>
            Home
          </Link>
          <Link to="/gallery" className={isActive("/gallery")}>
            Gallery
          </Link>
          <Link to="/custom-order" className={isActive("/custom-order")}>
            Custom Orders
          </Link>
          <Link to="/about" className={isActive("/about")}>
            About Me
          </Link>
        </div>
        
        <div className="navbar-auth">
          {isAuthenticated ? (
            <>
              <Avatar className="avatar">
                <AvatarFallback>
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
