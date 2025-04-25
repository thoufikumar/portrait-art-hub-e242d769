
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 AI Art Studio. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/order">Commission Art</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
