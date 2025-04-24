
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b border-gray-200 py-4 px-6 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-art-charcoal">
          Portrait Art Hub
        </Link>
        
        <div className="flex-grow mx-6 max-w-md">
          {isAuthenticated && (
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH"
                className="w-full py-2 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-art-charcoal text-center tracking-widest font-light"
              />
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-4">
            <Link
              to="/"
              className={`text-sm ${isActive("/") ? "font-bold text-art-charcoal" : "text-art-graphite hover:text-art-charcoal"}`}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`text-sm ${isActive("/gallery") ? "font-bold text-art-charcoal" : "text-art-graphite hover:text-art-charcoal"}`}
            >
              Gallery
            </Link>
            <Link
              to="/custom-order"
              className={`text-sm ${isActive("/custom-order") ? "font-bold text-art-charcoal" : "text-art-graphite hover:text-art-charcoal"}`}
            >
              Custom Orders
            </Link>
            <Link
              to="/about"
              className={`text-sm ${isActive("/about") ? "font-bold text-art-charcoal" : "text-art-graphite hover:text-art-charcoal"}`}
            >
              About Me
            </Link>
          </div>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-art-charcoal text-white">
                  {user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" onClick={logout} className="text-sm">
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" className="text-sm">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="text-sm bg-art-charcoal hover:bg-art-graphite">Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
