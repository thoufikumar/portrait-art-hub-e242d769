
import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Check if user is already logged in from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // This is a mock implementation. In a real app, you would call your backend API
      if (email && password) {
        // Mock user - replace with actual API call in production
        const mockUser = { id: "1", name: "Art Lover", email };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        
        toast({
          title: "Login successful",
          description: "Welcome back to Portrait Art Hub!",
        });
        
        navigate("/");
        return true;
      }
      return false;
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      // This is a mock implementation. In a real app, you would call your backend API
      if (name && email && password) {
        // Mock user - replace with actual API call in production
        const mockUser = { id: "1", name, email };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        
        toast({
          title: "Signup successful",
          description: "Welcome to Portrait Art Hub!",
        });
        
        navigate("/");
        return true;
      }
      return false;
    } catch (error) {
      toast({
        title: "Signup failed",
        description: "Please try again with different credentials.",
        variant: "destructive",
      });
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};
