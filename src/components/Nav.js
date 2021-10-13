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
      <Link className="link">Home</Link>
      <Link className="link">About</Link>
      <Link className="link">Treatments</Link>
      <Link className="link">Services</Link>
      <Link className="link">Faq</Link>
      <Link className="link">Contact</Link>
    </nav>
  );
}

export default Nav;
