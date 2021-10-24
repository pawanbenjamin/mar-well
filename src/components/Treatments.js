import React from "react";

import four from "../assets/treatments/four.jpg";
import pelv from "../assets/treatments/pelv.jpg";
import storm2 from "../assets/treatments/stom2.jpg";

import "./treatments.css";

function Treatments(props) {
  return (
    <div className="treatments">
      <section className="treat-section">
        <h1>Core Synchronism</h1>
        <p>
          “Core Synchronism is a system of hand medicine designed to assist
          nature in establishing harmony with all parts of the organism. It is
          not pathology specific. It is a mechanical system designed to restore
          balance, which results in activating an individual’s self-healing
          ability”
        </p>
        <a href="http://coresynchronism.org/">More Info Here</a>
        <img src={four} />
      </section>
      <section className="treat-section">
        <h1>Visceral Manipulation</h1>
        <p>
          Visceral Manipulation uses an in depth understanding of the anatomy in
          order to address fascial restrictions around the organ systems.
          Visceral manipulation can be utilized to treat a number of different
          symptoms from chronic constipation, bowel/bladder dysfunction, painful
          periods, musculoskeletal pain, infertility and more.
        </p>
        <a href="https://www.barralinstitute.com/therapies/index.php">
          Barral Institue Therapy Info
        </a>
        <img src={storm2} />
      </section>
      <section className="treat-section">
        <h1>Pelvic Floor Physical Therapy</h1>
        <p className="text-block">
          Pelvic floor physical therapy address the whole body with a deeper
          understanding of the pelvic floor muscles, nerves, organs, and
          function. As a pelvic floor physical therapist my goal is to empower
          each person to understand how their pelvic floor functions and to
          support them reaching their goals. The pelvic floor is a truly special
          area of the body because it is the only area in the body where our
          skeletal muscle have a direct impact on our organs (bowel, bladder,
          uterus, prostate). Therefor dysfunction at the pelvic floor can lead
          to bowel/bladder incontinence, retention, constipation, sexual
          dysfunction, pain, and more. Also, because the pelvic floor is one of
          our core muscles in can often be a missing link in persistent back
          pain, sciatica, and hip pain.
        </p>
        <img src={pelv} />
      </section>
    </div>
  );
}

export default Treatments;
