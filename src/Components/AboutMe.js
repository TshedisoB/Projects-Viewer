import React, { useState } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import "../styles/aboutMe.css";

function AboutMe() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const toggleAboutVisibility = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  return (
    <div className="about-container">
      <Button id="about-me-button" onClick={toggleAboutVisibility}>
        {isAboutVisible ? "Hide About Me" : "Show About Me"}
      </Button>

      <div className={`about-me-content ${isAboutVisible ? "visible" : ""}`}>
        <h2 className="about-me-header">About Me</h2>
        <Divider flexItem />
        <div className="about-me-section">
          <div className="about-me-summary">
            <h3 className="about-me-sub-header">Summary</h3>
            <p>
              Hey Hey! ✌😅 I'm Tshediso Boshiana, your go-to guy for
              transforming web development dreams into reality. Hailing from
              Pretoria, I specialize in creating unique and visually stunning
              mobile/web applications.
            </p>
            <br />
            <p>
              While in varsity I started contributing with other developers to
              create apps to help businesses like `Ladies In Hygiene` and
              `Precious The Hair Stylist` establish their online presence. As a
              passionate tech enthusiast, I enjoy learning technologies that
              helps build better and scalable applications.
            </p>
            <br />
            <p>
              Since becoming a FullStack web developer at Umuzi.org, I've
              expanded my skill-set to include frontend and backend frameworks.
              In addition to keeping daily standups in check, I immerse myself
              in building responsive web and mobile applications.
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
                  <li>Firebase</li>
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
    </div>
  );
}

export default AboutMe;
