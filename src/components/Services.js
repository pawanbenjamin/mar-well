import React from "react";

import lookinBaby from "../assets/services/looking-at-baby.jpg";
import gender from "../assets/services/gender.jpg";
import laugh from "../assets/services/laugh.jpg";
import seven from "../assets/services/seven.jpg";
import eight from "../assets/services/eight.jpg";

import lineAqua from "../assets/aqua-negative.svg";

import "./services.css";
import { Helmet } from "react-helmet";

function Services(props) {
  return (
    <div className="services">
      <Helmet>
        <title>Services</title>
        <meta name="description" content="Mariposa Wellness - Services" />
        <meta
          name="keywords"
          content="Pelvic, Health, Pelvic Health, Physical Therapy, DC, DMV, services"
        />
      </Helmet>
      <img className="services-header" src={lineAqua} />
      <section className="service">
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "center",
          }}
        >
          {" "}
          Services
        </h1>
        <hr />
        <img src={lookinBaby} />
        <h1>Prenatal Postpartum</h1>
        <p className="fem">
          During pregnancy and in the postpartum phase, changes in hormones, the
          alignment of the pregnant person (and fetus), and the birthing process
          itself can potentially cause muscle, joint, nerve, bladder and bowel
          problems. At Mariposa wellness our goals for treatment during
          pregnancy and postpartum are to improve fetal and parent alignment to
          allow for greater ease with labor and delivery, and help accelerate
          the new parent’s recovery after childbirth.
        </p>

        <div className="common-cond">
          <h2>Common conditions treated:</h2>
          <ul>
            <li>Pregnancy related Back/ Hip Pain</li>
            <li>Post-Partum urinary/ fecal incontinence</li>
            <li>Diastasis Recti</li>
            <li>Pelvic Organ Prolapse</li>
            <li>C-Section Scar Treatment</li>
            <li>Postural pain due to wearing, carrying, nursing baby</li>
            <li>Symphysis pubis dysfunction (SPD)</li>
            <li>Sexual Dysfunction</li>
            <li>Sacro-iliac joint dysfunction</li>
            <li>Pelvic instability</li>
          </ul>
        </div>
      </section>
      <section className="service" id="gender">
        <h1>Gender Inclusive Pelvic Health</h1>
        <p className="fem">
          At Mariposa wellness we are dedicated to inclusive rehabilitation for
          patients across the gender spectrum.
        </p>
        <img src={gender} />
        <div className="common-cond">
          <h2>Common conditions treated:</h2>
          <ul>
            <li>Tissue preparation Pre-Gender affirming surgery</li>
            <li>Post- Gender Affirming surgery rehabilitation</li>
            <li>Pelvic pain</li>
            <li>Difficulty using/ progressing dilators</li>
            <li>Urinary incontinence</li>
            <li>Voiding dysfunction</li>
            <li>Scar pain</li>
            <li>Pain with intercourse</li>
            <li>Urinary dysfunction</li>
            <li>Dyspareunia (pain with intercourse)</li>
            <li>Recurrent urinary tract infections</li>
            <li>Decreased sexual response</li>
            <li>Vaginoplasty</li>
          </ul>
        </div>
      </section>
      <section className="service" id="female">
        <h1>Female Pelvic Health</h1>
        <p className="fem">
          At Mariposa Wellness we specialize in the treatment of the following
          conditions specific to a womans uro-gynecological, sexual, and
          colo-rectal function, pre-and post-pregnancy, and chronic abdominal
          and pelvic pain syndromes. As Licensed Physical Therapists with
          advanced training in pelvic floor rehabilitation, we can help to
          normalize the myofascial tissue texture around the body, promote
          pelvic alignment, and restore normal functioning in the organs of the
          abdomino-pelvic area.
        </p>
        <img src={laugh} />
        <div className="common-cond">
          <h2>Common conditions treated:</h2>
          <ul>
            <li>Vulvodynia/Vestibulodynia</li>
            <li>Interstitial Cystitis/Painful Bladder Syndrome</li>
            <li>Pudendal Neuralgia</li>
            <li>Endometriosis</li>
            <li>Urgency/ Frequent Urination</li>
            <li>Urinary/ Fecal Incontinence</li>
            <li>Abdominal pain syndrome</li>
            <li>Chronic Pelvic Pain (women)</li>
            <li>Constipation</li>
            <li>Coccyx pain</li>
            <li>Vaginissmus</li>
            <li>Clitoral pain</li>
            <li>Sacral pain</li>
            <li>Anal/rectal pain</li>
            <li>Pain with sex</li>
            <li>Fertility problems due to scar tissue</li>
            <li>Post surgical care for any pelvic or abdominal surgery</li>
            <li>Anorgasmia</li>
            <li>Recurrent UTI’s</li>
          </ul>
        </div>
      </section>
      <section className="service" id="male">
        <h1>Male Pelvic Health</h1>
        <p className="fem">
          Our specialized Pelvic Floor Physical Therapists also treat conditions
          that are specific to the health of male urological and sexual
          function. For men, fascial restrictions in the pelvic floor and pelvic
          girdle can cause sexual dysfunction, difficulty with urination and
          bowel movements, or pelvic pain. Fascial restrictions in the male
          pelvis are often caused by poor postural alignment or scarring from
          abdominal or pelvic surgeries. Our Pelvic Floor Physical Therapists
          will help to reduce adhered scar tissue restrictions, and will also
          help to improve flexibility and normalize function to the urinary and
          reproductive systems.
        </p>
        <img src={seven} />
        <div className="common-cond">
          <ul>
            <h2>Common Conditions Treated:</h2>
            <li>Chronic Pelvic Pain Syndrome/male pelvic pain</li>
            <li>Nonbacterial chronic prostatitis</li>
            <li>Urgency/ Frequent Urination</li>
            <li>Urinary/ Fecal Incontinence</li>
            <li>Sexual dysfunction</li>
            <li>Abdominal pain syndrome</li>
            <li>Constipation</li>
            <li>Erectile Dysfunction</li>
            <li>Interstitial Cystitis/Painful Bladder Syndrome</li>
            <li>Pudendal Neuralgia</li>
            <li>Coccyx pain</li>
            <li>Penile/ Testicular pain</li>
            <li>Penile pain</li>
            <li>Anal/ rectal pain</li>
            <li>Post-ejaculatory pain</li>
            <li>Post prostatectomy pain</li>
          </ul>
        </div>
      </section>
      <section className="service" id="chronic">
        <h1>Chronic Pain</h1>
        <p className="fem">
          Chronic pain, like neck or back pain, can be caused by poor posture,
          accidents, falls, emotional trauma, surgeries and disease. It can
          significantly impact a person’s life and function and can be crippling
          to the mind, body and spirit. This is why it is extremely important to
          address these conditions holistically. At Mariposa Wellness we use
          integrative manual therapy techniques including Core Synchronism,
          Visceral Manipulation, and Myofascial Release to effectively treat
          persistent pain, release blocked emotional tension and improve
          postural and functionality in the body.
        </p>
        <img src={eight} />
        <div className="common-cond">
          <ul>
            <h2>Common Conditions Treated:</h2>
            <li>Carpal Tunnel Syndrome</li>
            <li>Chronic or Acute Musculoskeletal pain</li>
            <li>Fibromyalgia</li>
            <li>Foot and Ankle Pain</li>
            <li>Headaches</li>
            <li>Hip Pain</li>
            <li>Knee Pain</li>
            <li>Low Back Pain</li>
            <li>Migraines</li>
            <li>Myofascial pain syndrome</li>
            <li>Neck Pain</li>
            <li>Shoulder Pain</li>
            <li>Sciatica</li>
            <li>Scoliosis</li>
            <li>Femoral-acetabular impingement</li>
          </ul>
        </div>
      </section>
      <section className="service" id="comm">
        <h1>
          Community <br />
          Education Classes
        </h1>
        <p className="fem">
          If you are interested in having a physical therapist come out and talk
          with your new parents group please email admin@mariposawellnessllc.com
        </p>
        <div className="common-cond">
          <ul>
            <h2>Class topics include:</h2>
            <li>How to care for the pregnant body</li>
            <li>Physical therapy considerations for healing postpartum</li>
            <li>Sexual health throughout the lifespan</li>
            <li>How to manage prolapse</li>
            <li>How to manage incontinence</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Services;
