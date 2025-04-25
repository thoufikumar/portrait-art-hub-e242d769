
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    try {
      // This is a mock implementation. In a real app, you would call your backend API
      if (email && password) {
        // Mock user - replace with actual API call in production
        const mockUser = { id: "1", name: "Art Lover", email };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        
        alert("Login successful! Welcome back to AI Art Studio!");
        
        navigate("/");
        return true;
      }
      return false;
    } catch (error) {
      alert("Login failed. Please check your credentials and try again.");
      return false;
    }
  };

  const signup = async (name, email, password) => {
    try {
      // This is a mock implementation. In a real app, you would call your backend API
      if (name && email && password) {
        // Mock user - replace with actual API call in production
        const mockUser = { id: "1", name, email };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        
        alert("Signup successful! Welcome to AI Art Studio!");
        
        navigate("/");
        return true;
      }
      return false;
    } catch (error) {
      alert("Signup failed. Please try again with different credentials.");
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
    alert("You have been logged out successfully.");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
