
import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../components/ImageCarousel";
import "../styles/Home.css";

// Sample data - would typically come from an API or props
const featuredImages = [
  { 
    id: "1", 
    src: "https://via.placeholder.com/800x500?text=Portrait+1", 
    alt: "Portrait artwork 1" 
  },
  { 
    id: "2", 
    src: "https://via.placeholder.com/800x500?text=Portrait+2", 
    alt: "Portrait artwork 2" 
  },
  { 
    id: "3", 
    src: "https://via.placeholder.com/800x500?text=Portrait+3", 
    alt: "Portrait artwork 3" 
  }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Bringing Memories to Life Through Art
          </h1>
          <p className="hero-text">
            Custom portrait artwork created from your photos, capturing the moments and people you cherish.
          </p>
          <div className="hero-buttons">
            <Link to="/art-listing" className="primary-button">
              Browse Gallery
            </Link>
            <Link to="/order-form" className="secondary-button">
              Order Custom Portrait
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Artwork Carousel */}
      <section className="featured-section">
        <div className="section-container">
          <h2 className="section-title">
            Featured Portraits
          </h2>
          <div className="carousel-container">
            <ImageCarousel images={featuredImages} />
          </div>
          <div className="featured-action">
            <Link to="/art-listing" className="secondary-button">
              View All Artworks
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <h2 className="section-title">
            Our Services
          </h2>
          <p className="section-description">
            From classic portraits to custom artwork, we create timeless pieces that capture your special moments.
          </p>
          
          <div className="services-grid">
            <div className="service-card">
              <h3 className="service-title">
                Custom Portraits
              </h3>
              <p className="service-text">
                Transform your favorite photos into beautiful hand-drawn portraits, perfect for preserving memories.
              </p>
              <Link to="/order-form" className="service-link">
                Learn More →
              </Link>
            </div>
            
            <div className="service-card">
              <h3 className="service-title">
                Family Portraits
              </h3>
              <p className="service-text">
                Capture your family in a timeless artwork that celebrates your bond and creates a lasting heirloom.
              </p>
              <Link to="/order-form" className="service-link">
                Learn More →
              </Link>
            </div>
            
            <div className="service-card">
              <h3 className="service-title">
                Memorial Portraits
              </h3>
              <p className="service-text">
                Honor the memory of loved ones with a sensitive and detailed portrait that captures their essence.
              </p>
              <Link to="/order-form" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="section-container">
          <h2 className="section-title">
            Client Testimonials
          </h2>
          
          <div className="testimonial-card">
            <p className="testimonial-text">
              "The portrait captured my husband's personality perfectly. The attention to detail is remarkable, and it's now the centerpiece of our living room. Worth every penny!"
            </p>
            <p className="testimonial-author">— Sarah Johnson</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">
            Ready to Transform Your Photos into Art?
          </h2>
          <p className="cta-text">
            Order your custom portrait today and preserve your precious memories in a timeless artwork.
          </p>
          <Link to="/order-form" className="primary-button-light">
            Start Your Custom Order
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
