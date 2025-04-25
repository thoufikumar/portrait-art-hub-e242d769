
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          AI Art Studio
        </Link>
        
        <div className="nav-links">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link to="/gallery" className={location.pathname === "/gallery" ? "active" : ""}>
            Gallery
          </Link>
          <Link to="/order" className={location.pathname === "/order" ? "active" : ""}>
            Order
          </Link>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
