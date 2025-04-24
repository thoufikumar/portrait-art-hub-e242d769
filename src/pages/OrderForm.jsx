
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/OrderForm.css";

const OrderForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const typeFromQuery = params.get("type") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    portraitType: typeFromQuery || "individual",
    size: "medium",
    description: "",
    reference: null,
    budget: "",
    deadline: "",
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : 
              type === "file" ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    alert("Your order has been submitted! We'll contact you soon.");
  };

  return (
    <div className="order-form-page">
      <div className="order-form-header">
        <h1 className="page-title">Custom Portrait Order</h1>
        <p className="page-description">
          Fill out the form below to request your personalized artwork
        </p>
      </div>

      <div className="order-form-container">
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2 className="section-title">Contact Information</h2>
            
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Portrait Details</h2>
            
            <div className="form-group">
              <label htmlFor="portraitType">Portrait Type *</label>
              <select
                id="portraitType"
                name="portraitType"
                value={formData.portraitType}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="individual">Individual Portrait</option>
                <option value="couple">Couple Portrait</option>
                <option value="family">Family Portrait</option>
                <option value="pets">Pet Portrait</option>
                <option value="memorial">Memorial Portrait</option>
                <option value="wedding">Wedding Portrait</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="size">Size Preference *</label>
              <select
                id="size"
                name="size"
                value={formData.size}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="small">Small (8x10 inches)</option>
                <option value="medium">Medium (16x20 inches)</option>
                <option value="large">Large (24x36 inches)</option>
                <option value="custom">Custom Size</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="description">Description *</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="form-textarea"
                placeholder="Please describe what you'd like in your portrait..."
                rows={4}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="reference">Reference Photo</label>
              <input
                type="file"
                id="reference"
                name="reference"
                onChange={handleChange}
                className="form-file"
                accept="image/*"
              />
              <small className="form-help-text">
                Upload a clear photo that you'd like the portrait to be based on
              </small>
            </div>
          </div>

          <div className="form-section">
            <h2 className="section-title">Additional Information</h2>
            
            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select a budget range...</option>
                <option value="under250">Under $250</option>
                <option value="250-500">$250 - $500</option>
                <option value="500-750">$500 - $750</option>
                <option value="over750">Over $750</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="deadline">Desired Completion Date</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
                className="form-checkbox"
              />
              <label htmlFor="terms" className="checkbox-label">
                I agree to the terms and conditions *
              </label>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button">
              Submit Order Request
            </button>
          </div>
        </form>
        
        <div className="order-info">
          <div className="info-card">
            <h3 className="info-title">How It Works</h3>
            <ol className="info-list">
              <li>Submit your order request</li>
              <li>Receive a price quote</li>
              <li>Approve and make payment</li>
              <li>Review sketch and provide feedback</li>
              <li>Receive your finished artwork</li>
            </ol>
          </div>
          
          <div className="info-card">
            <h3 className="info-title">FAQs</h3>
            <div className="faq-item">
              <h4>How long does it take?</h4>
              <p>Most portraits are completed within 2-3 weeks depending on complexity.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept credit cards, PayPal, and bank transfers.</p>
            </div>
            <div className="faq-item">
              <h4>Can I request changes?</h4>
              <p>Yes, you'll have an opportunity to request adjustments after reviewing the initial sketch.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
