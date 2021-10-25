import React from "react";

import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import emailjs from "emailjs-com";

import { init } from "emailjs-com";

import lineAqua from "../assets/aqua-negative.svg";

import "./contact.css";

init(process.env["USER"]);

function Contact(props) {
  let history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env["REACT_APP_SERVICE"],
        process.env["REACT_APP_TEMPLATE"],
        e.target,
        process.env["REACT_APP_USER"]
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        history.push("/");
      });
  };

  return (
    <section className="contact">
      <img className="services-header" src={lineAqua} />
      <form className="form-cont" onSubmit={sendEmail}>
        <h2>Interested in becoming a New Patient?</h2>
        <h3>
          Please fill out the form below <br />
          and we will get back to you as soon as possible
        </h3>
        <TextField name="name" type="text" placeholder="Name" />
        <TextField name="email" type="text" placeholder="Email" />
        <TextField name="subject" type="text" placeholder="Subject" />
        <TextField
          name="message"
          type="text-area"
          placeholder="Message"
          multiline
        />
        <button className="book2" size="small" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
