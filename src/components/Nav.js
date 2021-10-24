import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import logo from "../assets/menu.png";

import "./nav.css";

function Nav(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickServ = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseServ = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
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
        <Link
          to="/services"
          className="link"
          aria-owns={anchorEl ? "simple-menu-1" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(e) => handleClickServ(e)}
        >
          Services
        </Link>
        <Menu
          id="simple-menu-1"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleCloseServ }}
          elevation={0}
          style={{ zIndex: 1302 }}
        >
          {/* <MenuItem className="menu-item">Services</MenuItem> */}
          <MenuItem
            component={Link}
            to="/services"
            className="menu-item"
            onClick={handleClose}
          >
            Services
          </MenuItem>
          <MenuItem className="menu-item" onClick={handleClose}>
            <a
              className="anchor"
              onClick="return false;"
              href="/services#pre-post"
            >
              Prenatal / Postpartum
            </a>
          </MenuItem>

          <MenuItem className="menu-item" onClick={handleClose}>
            <a
              className="anchor"
              onClick="return false;"
              href="/services#gender"
            >
              Gender Inclusive Pelvic Health
            </a>
          </MenuItem>

          <MenuItem className="menu-item" onClick={handleClose}>
            <a
              className="anchor"
              onClick="return false;"
              href="/services#female"
            >
              Female Pelvic Health
            </a>
          </MenuItem>

          <MenuItem className="menu-item" onClick={handleClose}>
            <a className="anchor" onClick="return false;" href="/services#male">
              Male Pelvic Health
            </a>
          </MenuItem>

          <MenuItem className="menu-item" onClick={handleClose}>
            <a
              className="anchor"
              onClick="return false;"
              href="/services#chron"
            >
              Chronic Pain
            </a>
          </MenuItem>

          <MenuItem
            className="menu-item"
            component={Link}
            to="/services#ed"
            onClick={handleClose}
          >
            <a className="anchor" onClick="return false;" href="/services#ed">
              Community Education
            </a>
          </MenuItem>
        </Menu>
        <Link to="/faq" className="link">
          Faq
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
      <img
        src={logo}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="drop-down"
      />

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          component={Link}
          to="/"
          style={{ color: "#4A1C3E" }}
          onClick={handleClose}
        >
          Home
        </MenuItem>
        <MenuItem
          style={{ color: "#4A1C3E" }}
          component={Link}
          to="/about"
          onClick={handleClose}
        >
          About
        </MenuItem>
        <MenuItem
          style={{ color: "#4A1C3E" }}
          component={Link}
          to="/treatments"
          onClick={handleClose}
        >
          Treatments
        </MenuItem>
        <MenuItem
          style={{ color: "#4A1C3E" }}
          component={Link}
          to="/services"
          onClick={handleClose}
        >
          Services
        </MenuItem>
        <MenuItem
          style={{ color: "#4A1C3E" }}
          component={Link}
          to="/FAQ"
          onClick={handleClose}
        >
          FAQ
        </MenuItem>
        <MenuItem
          style={{ color: "#4A1C3E" }}
          component={Link}
          to="/contact"
          onClick={handleClose}
        >
          Contact
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default Nav;
