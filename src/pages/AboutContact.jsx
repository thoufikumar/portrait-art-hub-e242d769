
import React, { useState } from 'react';
import '../styles/AboutContact.css';

const AboutContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <div className="about-contact">
      <section className="about-section">
        <h1>About the Artist</h1>
        <div className="artist-info">
          <img 
            src="/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png" 
            alt="Artist Portrait" 
            className="artist-image"
          />
          <div className="artist-text">
            <h2>Portrait Artist</h2>
            <p>Welcome to AI Art Studio! I'm a digital artist specializing in AI-enhanced portrait art. With years of experience in traditional art and a passion for technology, I blend classical techniques with cutting-edge AI to create unique, personalized portraits.</p>
            <p>Each piece is carefully crafted to capture not just the likeness, but the essence and personality of the subject. Whether you're looking for a classic pencil style or a more contemporary digital approach, I'm here to bring your vision to life.</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
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
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default AboutContact;
