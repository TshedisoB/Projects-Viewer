import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";

import "../styles/aboutMe.css";
import { splitString } from "../utils/helper.js";
import { string1, string2, string3 } from "../utils/paddingStrings.js";

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
        {isAboutVisible ? "Hide About Me" : "Show About Me"}
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
              
              <motion.div className="skills-category" variants={charVariants}>
                <strong>Web Development:</strong>
                <div className="skills-list">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>C#</li>
                  </ul>
                </div>
              </motion.div>
                  
              <motion.div className="skills-category" variants={charVariants}>
                <strong>Frameworks & Libraries:</strong>
                <div className="skills-list">
                  <ul>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Next.js</li>
                    <li>Redux</li>
                    <li>React Query</li>
                    <li>Zustand</li>
                    <li>ASP.NET</li>
                    <li>Tailwind CSS</li>
                    <li>Material UI</li>
                    <li>shadcn/ui</li>
                  </ul>
                </div>
              </motion.div>
                  
              <motion.div className="skills-category" variants={charVariants}>
                <strong>Backend & Databases:</strong>
                <div className="skills-list">
                  <ul>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>SQLite</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </motion.div>
                  
              <motion.div className="skills-category" variants={charVariants}>
                <strong>Testing & Tools:</strong>
                <div className="skills-list">
                  <ul>
                    <li>Jest</li>
                    <li>Jasmine</li>
                    <li>React Testing Library</li>
                    <li>Postman</li>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>Expo</li>
                  </ul>
                </div>
              </motion.div>
                  
              <motion.div className="skills-category" variants={charVariants}>
                <strong>Other Technologies:</strong>
                <div className="skills-list">
                  <ul>
                    <li>DevExtreme</li>
                    <li>TipTap (Collaborative Editor)</li>
                    <li>zDarcy (Image/Video Editor)</li>
                    <li>Figma (UI/UX Design)</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
