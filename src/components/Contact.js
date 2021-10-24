import React from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import emailjs from "emailjs-com";

import { init } from "emailjs-com";

import aquaLogo from "../assets/lineAqua.svg";

import "./contact.css";

init(process.env["USER"]);

function Contact(props) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env["SERVICE"],
        process.env["TEMPLATE"],
        e.target,
        process.env["USER"]
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact">
      <h1 className="header">Contact</h1>
      <h2>
        Interested in becoming a new Patient?
        <br />
        Please fill out the form below <br />
        and we will get back to you as soon as possible
      </h2>

      <form className="form-cont" onSubmit={sendEmail}>
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
