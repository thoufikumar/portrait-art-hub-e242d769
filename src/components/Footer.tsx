import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Portrait Art Hub</h3>
            <p>Creating beautiful, personalized portraits from your favorite photographs.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/custom-order" className="footer-link">Custom Orders</Link></li>
              <li><Link to="/about" className="footer-link">About Me</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul className="footer-links">
              <li>Email: contact@portraitarthub.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.252.6 1.846 1.193.592.594.965 1.178 1.217 1.845.246.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.219 1.791-.465 2.427a4.9 4.9 0 01-1.217 1.846 4.9 4.9 0 01-1.846 1.217c-.636.247-1.363.416-2.427.465-1.066.048-1.405.06-4.122.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.9 4.9 0 01-1.846-1.217 4.9 4.9 0 01-1.217-1.846c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.9 4.9 0 011.217-1.846A4.9 4.9 0 015.845 2.465c.636-.247 1.363-.416 2.427-.465C9.336 1.947 9.695 1.9 12.315 1.9h.001zm-.56 1.802h-.002c-2.719 0-3.062.011-4.122.06-.917.042-1.466.196-1.938.366a3.1 3.1 0 00-1.167.763 3.1 3.1 0 00-.763 1.167c-.17.472-.324 1.021-.366 1.938-.049 1.06-.06 1.403-.06 4.122 0 2.719.011 3.062.06 4.122.042.917.196 1.466.366 1.938.192.518.45.968.763 1.168.424.43.867.692 1.167.763.472.17 1.021.324 1.938.366 1.06.049 1.403.06 4.122.06 2.72 0 3.062-.011 4.122-.06.917-.042 1.467-.196 1.938-.366.518-.192.967-.45 1.167-.763.431-.424.692-.867.763-1.167.172-.472.326-1.021.366-1.938.049-1.06.06-1.403.06-4.122s-.011-3.062-.06-4.122c-.042-.917-.196-1.466-.366-1.938a3.1 3.1 0 00-.763-1.167 3.1 3.1 0 00-1.167-.763c-.472-.17-1.021-.324-1.938-.366-1.06-.049-1.403-.06-4.122-.06zm1.42 17.925a4.604 4.604 0 01-4.598-4.598 4.604 4.604 0 014.598-4.598 4.604 4.604 0 014.598 4.598 4.604 4.604 0 01-4.598 4.598zm0-11.676a7.078 7.078 0 100 14.156 7.078 7.078 0 000-14.156zm8.07-.064a1.641 1.641 0 11-3.282 0 1.641 1.641 0 013.282 0z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Portrait Art Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
