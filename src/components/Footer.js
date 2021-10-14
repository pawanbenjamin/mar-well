import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/" className="link">
        About
      </Link>
      <Link to="/" className="link">
        Treatments
      </Link>
      <Link to="/" className="link">
        Services
      </Link>
      <Link to="/" className="link">
        Faq
      </Link>
      <Link to="/" className="link">
        Contact
      </Link>
    </div>
  );
}

export default Footer;
