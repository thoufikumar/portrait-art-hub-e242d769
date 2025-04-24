
import React from "react";
import "../styles/Input.css";

const Input = ({ 
  type = "text", 
  placeholder, 
  value, 
  onChange, 
  label,
  required,
  className = "" 
}) => {
  return (
    <div className="input-container">
      {label && (
        <label className="input-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`input ${className}`}
      />
    </div>
  );
};

export default Input;
