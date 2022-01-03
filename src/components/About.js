import React from "react";

import mariAndKaruna from "../assets/bio-pics/one.jpg";
import didiMariFam from "../assets/bio-pics/two.jpg";
import rickyMari from "../assets/bio-pics/three.jpg";
import mariFam from "../assets/bio-pics/four.jpg";

import bluewave from "../assets/paper-pieces/blue-wave.svg";

import aquaNeg from "../assets/aqua-negative.svg";

import "./about.css";

function About(props) {
  return (
    <>
      <img className="services-header" src={aquaNeg} />
      <div className="about-device">
        <h1 className="about-device-header">Marisa (She/ella)</h1>
        {/* <hr /> */}
        <div>
          <img src={mariAndKaruna} />
        </div>
        <p>
          My whole life, I have known that my path is to support others thrive
          in their journey toward healing and wholeness. My interest in manual
          therapy started when I was eight and my dad herniated a disc in his
          back, developing sciatica that after a while made it really difficult
          for him to move. For weeks he was mainly bedridden. I would bring him
          hot packs in bed and try to lift his spirits. When my dad seemed at a
          loss for what to do, my mom, a physical therapist, asked one of her
          manual physical therapist buddies to help out. She would come to the
          house, throw a mat on the floor, and treat my dad. I would watch in
          fascination as my dad was able to move better and better after every
          session. He was diligent with his exercises and now, over 30 years
          later he is active, strong, and never needed surgery! This was the
          start of my curiosity, deep awe, and respect for the body's innate
          ability to heal.
        </p>

        <p className="bio1">
          As a college student I studied physical therapy at the University of
          Connecticut graduating in 2004. At school I was passionate about
          advocating for women’s health and women’s right to choose and be
          informed about all aspects of their health. Also, as one of the only
          Latina’s and POC folks in the physical therapy and allied health
          department, I was acutely aware of the disparities in health research
          and access to healthcare among BIPOC communities. I completed my
          graduation thesis on Psychosocial Barriers to Physical Activity in
          Puerto Rican Women and published my research in the Journal of
          Strength and Conditioning. I also gave lectures at local conferences
          on the importance of healthcare practitioners recognizing the racial
          and ethic differences when developing treatment plans.
        </p>
        <div>
          <img src={mariFam} />
        </div>
        <p>
          Knowing that I wanted to focus my career in pelvic health, I completed
          the course work through the Herman & Wallace Pelvic Rehabilitation
          Institute and began a fulfilling career as a pelvic health physical
          therapist. I have worked at the National Rehabilitation Institute,
          Kirk Center for Health Living in the Chicagoland region, a specialty
          clinic for pelvic floor dysfunction, and in 2012 I was the co-founder
          and co-owner of Body Connect Health and Wellness in Washington DC. At
          Body Connect one of our main missions was not only to provide
          exceptional care for all persons with pelvic floor dysfunction but
          also to empower the community through education classes on topics
          ranging from work ergonomics, pre and postpartum wellness, to sexual
          health throughout the lifespan.
        </p>
        <div className="didiFam">
          <img src={didiMariFam} />
        </div>
        <p className="bio1">
          After 8 years at Body Connect, 3 kids (between my business partner and
          myself), cross country moves, a global pandemic we decided it was time
          to close Body Connect. I started Mariposa Wellness to continue serving
          the DC community in the areas of pelvic health, chronic pain, and full
          body integrative healing. When I am not treating, I love spending time
          with my family and friends, being in nature, exploring the world,
          eating delicious food, dancing and listening to live music.
        </p>
        <screen className="treat-section">
          <h1>Appreciations</h1>
          <p className="text-block">
            I wouldn't be the practitioner I am today without the wonderful
            mentors I have had along the way. My first mentor and greatest
            support has been my mother, Myrta Zayas Alonso. Growing up with a
            physical therapist Mom, I learned at a young age to analyze gait
            patterns and posture while hanging out at a local park or museum.
            Pam Wood and Diane Stroud, phenomenal physical therapists and owners
            of Hand-n-Hand Therapy in Arlington were the PTs who treated my dad.
            As I showed interest in physical therapy at the end of High School,
            they took me under their wings immediately. Their mentorship
            throughout the years has been invaluable. Everett Ogawa, dharma
            teacher and bodyworker, taught me the power of grounding my breath
            and body as I work, allowing me to be more present to the nuances of
            healing traumatic patterning in the mind, body, spirit. His
            teachings forever changed me and my work. Brandi Kirk, owner of Kirk
            Center for Healthy Living, took me under her wing guiding me through
            the nuances of Visceral Manipulation and pelvic health. I worked at
            her pelvic health practice for 2 years and grew tremendously as a
            pelvic health practitioner. Ann Udofia-Nwabuebo, together we
            co-owned Body Connect Health & Wellness. Along with being a friend
            and excellent practitioner, Ann mentored me in being a business
            owner. And finally, Keagha Carscallen, who continues to teach me the
            infinite possibilities of palpation. I am forever grateful.
          </p>
        </screen>
      </div>
    </>
  );
}

export default About;
