import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";

import "../styles/aboutMe.css";
import { splitString } from "../utils/helper.js";
import { string1, string2, string3 } from "../utils/paddingStrings.js";
import { skillsData } from "../utils/skills.js";

function AboutMe() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  useEffect(() => {
    if (isAboutVisible) {
      const skillsLists = document.querySelectorAll('.skills-list');
      skillsLists.forEach(list => {
        const scrollHeight = list.scrollHeight;
        let startTime;
        
        function animate(currentTime) {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / 5000;

          if (progress < 1) {
            list.scrollTop = progress * (scrollHeight - list.clientHeight);
            requestAnimationFrame(animate);
          }
        }
        requestAnimationFrame(animate);
      });
    }
  }, [isAboutVisible]);

  const toggleAboutVisibility = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  const p1 = splitString(string1);
  const p2 = splitString(string2);
  const p3 = splitString(string3);

  const charVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="about-container">
      <Button id="about-me-button" onClick={toggleAboutVisibility}>
        {isAboutVisible ? "Hide" : "Show About Me"}
      </Button>

      <div className={`about-me-content ${isAboutVisible ? "visible" : ""}`}>
        <h2 className="about-me-header">About Me</h2>
        <Divider flexItem />
        <div className="about-me-section">
          <div className="about-me-summary">
            <h3 className="about-me-sub-header">Summary</h3>
            <motion.p
              className="about-me-paragraph"
              initial="hidden"
              animate={isAboutVisible ? "visible" : "hidden"}
              whileInView="reveal"
              transition={{ staggerChildren: 0.01 }}>
              {p1.map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <br />
            <motion.p
              className="about-me-paragraph"
              initial="hidden"
              animate={isAboutVisible ? "visible" : "hidden"}
              whileInView="reveal"
              transition={{ staggerChildren: 0.02 }}>
              {p2.map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <br />
            <motion.p
              className="about-me-paragraph"
              initial="hidden"
              animate={isAboutVisible ? "visible" : "hidden"}
              whileInView="reveal"
              transition={{ staggerChildren: 0.03 }}>
              {p3.map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="about-me-skills">
            <h3 className="about-me-sub-header">Skills</h3>
            <motion.div
              className="skills-list-container"
              initial="hidden"
              animate={isAboutVisible ? "visible" : "hidden"}
              whileInView="reveal"
              transition={{ staggerChildren: 0.23 }}>
              
              {Object.entries(skillsData).map(([category, skills]) => (
                <motion.div className="skills-category" variants={charVariants} key={category}>
                  <strong>{category}:</strong>
                  <div className="skills-list">
                    <ul>
                      {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
