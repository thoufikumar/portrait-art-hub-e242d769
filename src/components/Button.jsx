
import React from "react";
import "../styles/Button.css";

const Button = ({ children, variant = "default", type = "button", onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${variant} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
