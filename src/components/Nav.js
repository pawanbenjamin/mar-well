import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./nav.css";

function Nav(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickServ = (e) => {
    setAnchorEl(e.currentTarget);
    setIsMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseServ = (e) => {
    setAnchorEl(null);
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/about" className="link">
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
    </nav>
  );
}

export default Nav;
