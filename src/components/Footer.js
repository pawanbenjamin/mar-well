import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="links">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/treatments" className="link">
          Treatments
        </Link>
        <Link to="/services" className="link">
          Services
        </Link>
        <Link to="/faq" className="link">
          Faq
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
      <div className="copyright">
        <h3>© 2021 Mariposa Wellness llc</h3>
      </div>
    </div>
  );
}

export default Footer;
