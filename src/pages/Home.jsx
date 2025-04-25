
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Transform Your Ideas Into Art</h1>
        <p>Custom AI-generated artwork tailored to your vision</p>
        <Link to="/order" className="cta-button">
          Create Your Art
        </Link>
      </section>

      <section className="featured">
        <h2>Featured Artworks</h2>
        <div className="artwork-grid">
          {[1, 2, 3].map((i) => (
            <div key={i} className="artwork-card">
              <img
                src={`/lovable-uploads/a2b686ad-c5d4-4cc0-bf2d-a5b78a17a158.png`}
                alt={`Featured Artwork ${i}`}
              />
              <h3>Artwork Title {i}</h3>
              <p>AI-generated masterpiece</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
