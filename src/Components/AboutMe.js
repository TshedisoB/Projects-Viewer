import React from "react";
import Divider from "@mui/material/Divider";

import "../styles/aboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <h2 className="about-me-header">About Me</h2>
      <Divider flexItem />
      <div className="about-me-section">
        <div className="about-me-summary">
          <h3 className="about-me-sub-header">Summary</h3>
          <p>
            Hey Hey✌😅! I'm Tshediso Boshiana, your go-to guy for turning web
            development dreams into reality. Hailing from Pretoria, I'm all
            about creating unique and visually stunning mobile/web applications.
          </p>
          <br />
          <p>
            As a tech enthusiast, I love teaming up with fellow developers to
            bring ideas to life. Currently, I'm rocking the role of Junior Tech
            Lead at Umuzi.org, where I not only keep the daily standups in check
            but also dive deep into coding responsive web and mobile
            applications using various JavaScript frameworks. I've left my mark
            at Ladies In Hygiene and Precious The Hair Stylist, adding my touch
            to their online presence. Education-wise, I'm armed with a
            Bachelor's in Computer Sciences and Mathematical Statistics from
            Sefako Makgatho Health Science University.
          </p>
        </div>

        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="about-me-skills">
          <h3 className="about-me-sub-header">Skills</h3>

          <div className="skills-list-container">
            <div className="skills-category">
              <strong>Web Development:</strong>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>

            <div className="skills-category">
              <strong>Frameworks:</strong>
              <ul>
                <li>React.js</li>
                <li>React Native</li>
                <li>Redux</li>
              </ul>
            </div>

            <div className="skills-category">
              <strong>Backend Technologies:</strong>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Docker</li>
              </ul>
            </div>

            <div className="skills-category">
              <strong>Databases:</strong>
              <ul>
                <li>Postgress</li>
                <li>SQLite</li>
                <li>MongoDB</li>
              </ul>
            </div>

            <div className="skills-category">
              <strong>Version Control:</strong>
              <ul>
                <li>Git</li>
              </ul>
            </div>

            <div className="skills-category">
              <strong>Testing:</strong>
              <ul>
                <li>Unit Testing (Jest/Jasmine)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
