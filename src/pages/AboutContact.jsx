
import React, { useState } from "react";
import "../styles/AboutContact.css";

const AboutContact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    submitted: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Contact form submitted:", contactForm);
    setContactForm(prev => ({
      ...prev,
      submitted: true
    }));
  };

  return (
    <div className="about-contact-page">
      {/* About Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-image-container">
              <img 
                src="https://via.placeholder.com/400x500?text=Artist+Photo" 
                alt="Portrait Artist" 
                className="about-image" 
              />
            </div>
            
            <div className="about-text">
              <h1 className="page-title">About the Artist</h1>
              
              <p>
                Hello and welcome! I'm Jane Doe, the artist behind Portrait Art Hub. With over 15 years of experience in portrait art, I've dedicated my life to capturing people's essence through my drawings and paintings.
              </p>
              
              <p>
                My journey began at the Academy of Fine Arts where I developed my technical skills, but it was through years of personal exploration and countless portraits that I developed my signature style—a blend of realistic precision with emotive expressiveness.
              </p>
              
              <p>
                I believe that a great portrait captures more than just a likeness—it reveals character, emotion, and story. Whether I'm creating a family portrait, memorial piece, or pet drawing, I approach each project with dedication and attention to detail.
              </p>
              
              <div className="artist-facts">
                <div className="fact-item">
                  <span className="fact-number">500+</span>
                  <span className="fact-text">Portraits Completed</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">15+</span>
                  <span className="fact-text">Years of Experience</span>
                </div>
                <div className="fact-item">
                  <span className="fact-number">48</span>
                  <span className="fact-text">States Shipped To</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <h2 className="section-title">My Process</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3 className="step-title">Consultation</h3>
              <p className="step-description">
                We begin with a thorough discussion about your vision, preferences, and the story you want your portrait to tell.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <h3 className="step-title">Reference Selection</h3>
              <p className="step-description">
                I'll help you choose the perfect reference photos that capture the essence and mood for your portrait.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <h3 className="step-title">Initial Sketch</h3>
              <p className="step-description">
                I create a preliminary sketch for your approval, ensuring we're aligned on composition and style.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <h3 className="step-title">Creation</h3>
              <p className="step-description">
                Using premium materials, I bring your portrait to life through a meticulous, layer-by-layer process.
              </p>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <h3 className="step-title">Delivery</h3>
              <p className="step-description">
                Your finished portrait is carefully packaged and shipped, ready to become a cherished keepsake.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact Me</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-block">
                <h3 className="info-title">Email</h3>
                <p className="info-text">info@portraitarthub.com</p>
              </div>
              
              <div className="info-block">
                <h3 className="info-title">Phone</h3>
                <p className="info-text">(555) 123-4567</p>
              </div>
              
              <div className="info-block">
                <h3 className="info-title">Studio Hours</h3>
                <p className="info-text">Monday - Friday: 9am - 5pm</p>
                <p className="info-text">Saturday: By appointment</p>
              </div>
              
              <div className="info-block">
                <h3 className="info-title">Follow Me</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Pinterest</a>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              {contactForm.submitted ? (
                <div className="thank-you-message">
                  <h3>Thank You!</h3>
                  <p>Your message has been sent. I'll get back to you soon!</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleChange}
                      required
                      className="form-textarea"
                      rows={5}
                    />
                  </div>
                  
                  <button type="submit" className="submit-button">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContact;
