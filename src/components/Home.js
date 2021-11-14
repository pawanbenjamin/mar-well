import React from "react";

import "./home.css";

import fullLogo from "../assets/full-logo.svg";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="home">
      <div className="banner">
        <img className="logo" src={fullLogo} />
      </div>
      <div className="intro">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Mariposa Wellness I combine a variety
          of manual medicine modalities to treat the whole person. With an
          expertise in Pelvic Health and almost 20 years experience as a
          physical therapist my goal is to provide treatment to enhance your
          overall movement and function while empowering you with knowledge
          regarding your body and particular condition and techniques for self
          care.
        </p>
      </div>
      <div className="button-container">
        <Link to="/contact">
          <button>New Patient?</button>
        </Link>
        <a href="https://bchwbooking.clientsecure.me/">
          <button className="app-btn">Book Appt</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
