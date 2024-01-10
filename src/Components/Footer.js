import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="footer-message">Thank you for visiting my portfolio</h3>
      <div className="footer-icons">
        <a
          href="https://github.com/tshedisoB"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/tshediso-boshiana-b43096219/"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>

        <a
          href="https://wa.me/+27606101110"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>

        <a
          href="mailto:tshedisoboshiana@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <i className="far fa-envelope"></i>
        </a>

        <a href="tel:+27606101110" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-phone"></i>
        </a>

        <a
          href="https://tshedisob.github.io/"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fas fa-globe"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
