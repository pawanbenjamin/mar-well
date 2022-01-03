import React, { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { HashLink } from "react-router-hash-link";

import logo from "../assets/menu.png";

import "./nav.css";

function Nav(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
    console.log(anchorEl2);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
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
          Book
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
              transform: "translateX(-10%) translateY(20%)",
              backgroundColor: `rgba(250, 239, 209, 1)`,
              backgroundImage: `url("../assets/binding-light.png")`,
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <HashLink to="/services">Prenatal / Postpartum</HashLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HashLink to="/services#gender">
              Gender Inclusive Pelvic Health
            </HashLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HashLink to="/services#female">Female Pelvic Health</HashLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HashLink to="/services#male">Male Pelvic Health</HashLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HashLink to="/services#chronic">Chronic Pain</HashLink>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <HashLink to="/services#comm">Community Education</HashLink>
          </MenuItem>
        </Menu>
      </div>
      <img
        src={logo}
        className="drop-down"
        aria-controls="drop-menu"
        onClick={handleClick2}
      />
      <Menu
        disableScrollLock={true}
        id="drop-menu"
        open={open2}
        anchorEl={anchorEl2}
        onClose={handleClose2}
        MenuListProps={{
          "aria-labelledby": "serv-link",
          onMouseLeave: handleClose2,
        }}
        PaperProps={{
          style: {
            transform: "translateX(-10%) translateY(20%)",
            backgroundColor: `rgba(250, 239, 209, 1)`,
            backgroundImage: `url("../assets/binding-light.png")`,
          },
        }}
      >
        <MenuItem onClick={handleClose2}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem onClick={handleClose2}>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem onClick={handleClose2}>
          <Link to="/treatments">Treatments</Link>
        </MenuItem>
        <MenuItem onClick={handleClose2}>
          <Link to="/services#gender">Services</Link>
        </MenuItem>
        <MenuItem onClick={handleClose2}>
          <Link to="/faq">FAQ</Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose2}>
          <Link to="/contact">Contact</Link>
        </MenuItem> */}
        <MenuItem onClick={handleClose2}>
          <Link to="/contact">
            <button className="book-btn">Book</button>
          </Link>
        </MenuItem>
      </Menu>
    </nav>
  );
}

export default Nav;
