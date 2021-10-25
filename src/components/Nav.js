import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../assets/menu.png";

import "./nav.css";

function Nav(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav">
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
        <a
          className="link"
          id="serv-link"
          aria-controls="simple-menu"
          to="/services"
          className="link"
          onClick={handleClick}
        >
          Services
        </a>
        <Link to="/faq" className="link">
          Faq
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
        <Menu
          disableScrollLock={true}
          id="simple-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "serv-link",
            onMouseLeave: handleClose,
          }}
          PaperProps={{
            style: {
              transform: "translateX(-10%) translateY(100%)",
            },
          }}
        >
          <MenuItem onClick={handleClose}>Prenatal / Postpartum</MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Nav;
