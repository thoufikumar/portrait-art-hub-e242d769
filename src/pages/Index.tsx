
import React from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "@/components/ImageCarousel";
import { featuredImages } from "@/data/artworks";
import "../styles/Home.css";

const Index = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Bringing Memories to Life Through Art
          </h1>
          <p className="hero-description">
            Custom portrait artwork created from your photos, capturing the moments and people you cherish.
          </p>
          <div className="button-group">
            <Link to="/gallery" className="primary-button">
              Browse Gallery
            </Link>
            <Link to="/custom-order" className="secondary-button">
              Order Custom Portrait
            </Link>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="section-title">Featured Portraits</h2>
        <div className="carousel-container">
          <ImageCarousel images={featuredImages} />
        </div>
      </section>
    </div>
  );
};

export default Index;
