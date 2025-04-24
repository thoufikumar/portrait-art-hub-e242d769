
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ArtListing.css";

// Sample artwork data
const artworks = [
  {
    id: 1,
    title: "Family Portrait",
    description: "Charcoal on canvas, 24x36 inches",
    price: "$450",
    image: "https://via.placeholder.com/300x400?text=Family+Portrait",
    category: "family"
  },
  {
    id: 2,
    title: "Wedding Sketch",
    description: "Pencil on paper, 18x24 inches",
    price: "$350",
    image: "https://via.placeholder.com/300x400?text=Wedding+Sketch",
    category: "wedding"
  },
  {
    id: 3,
    title: "Child Portrait",
    description: "Colored pencil on paper, 16x20 inches",
    price: "$375",
    image: "https://via.placeholder.com/300x400?text=Child+Portrait",
    category: "individual"
  },
  {
    id: 4,
    title: "Pet Portrait",
    description: "Charcoal and pastel, 12x16 inches",
    price: "$275",
    image: "https://via.placeholder.com/300x400?text=Pet+Portrait",
    category: "pets"
  },
  {
    id: 5,
    title: "Memorial Portrait",
    description: "Oil on canvas, 20x24 inches",
    price: "$525",
    image: "https://via.placeholder.com/300x400?text=Memorial+Portrait",
    category: "memorial"
  },
  {
    id: 6,
    title: "Couple Portrait",
    description: "Graphite on paper, 18x24 inches",
    price: "$385",
    image: "https://via.placeholder.com/300x400?text=Couple+Portrait",
    category: "couple"
  }
];

const ArtListing = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  
  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
    <div className="art-listing-page">
      <div className="art-listing-header">
        <h1 className="page-title">Art Gallery</h1>
        <p className="page-description">
          Browse through our collection of handcrafted portraits and artworks
        </p>
      </div>
      
      {/* Filters */}
      <div className="filter-container">
        <div className="category-filters">
          <button 
            className={`filter-button ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${selectedCategory === 'family' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('family')}
          >
            Family
          </button>
          <button 
            className={`filter-button ${selectedCategory === 'individual' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('individual')}
          >
            Individual
          </button>
          <button 
            className={`filter-button ${selectedCategory === 'couple' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('couple')}
          >
            Couple
          </button>
          <button 
            className={`filter-button ${selectedCategory === 'pets' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('pets')}
          >
            Pets
          </button>
          <button 
            className={`filter-button ${selectedCategory === 'memorial' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('memorial')}
          >
            Memorial
          </button>
          <button 
            className={`filter-button ${selectedCategory === 'wedding' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('wedding')}
          >
            Wedding
          </button>
        </div>
      </div>
      
      {/* Artwork Grid */}
      <div className="artwork-grid">
        {filteredArtworks.map(artwork => (
          <div key={artwork.id} className="artwork-card">
            <div className="artwork-image-container">
              <img 
                src={artwork.image} 
                alt={artwork.title} 
                className="artwork-image" 
              />
            </div>
            <div className="artwork-info">
              <h3 className="artwork-title">{artwork.title}</h3>
              <p className="artwork-description">{artwork.description}</p>
              <p className="artwork-price">{artwork.price}</p>
              <Link to={`/order-form?type=${artwork.category}`} className="artwork-order-button">
                Order Similar
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Call to action */}
      <div className="art-listing-cta">
        <h2 className="cta-subtitle">Don't see exactly what you're looking for?</h2>
        <p className="cta-text">I can create a custom portrait based on your specific requirements.</p>
        <Link to="/order-form" className="primary-button">
          Request Custom Artwork
        </Link>
      </div>
    </div>
  );
};

export default ArtListing;
