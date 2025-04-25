
import React, { useState } from 'react';
import '../styles/OrderForm.css';

const OrderForm = () => {
  const [orderData, setOrderData] = useState({
    name: '',
    email: '',
    artStyle: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', orderData);
    // Order submission logic would go here
  };

  return (
    <div className="order-form-container">
      <h1>Custom Art Order</h1>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={orderData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={orderData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="artStyle">Art Style</label>
          <select
            id="artStyle"
            name="artStyle"
            value={orderData.artStyle}
            onChange={handleChange}
            required
          >
            <option value="">Select a style</option>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
            <option value="abstract">Abstract</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={orderData.description}
            onChange={handleChange}
            required
            rows="5"
          />
        </div>

        <button type="submit" className="submit-button">Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
