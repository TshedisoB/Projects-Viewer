import React, { useState, useEffect } from "react";
import "./App.css";
import imagesData from "./data.json";

const App = () => {
  const [popupImageSrc, setPopupImageSrc] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (src) => {
    setPopupImageSrc(src);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="header">Tshediso's Projects</h1>

      <div className="image-container">
        {imagesData.map((image, index) => (
          <div
            className="image"
            key={index}
            onClick={() => openPopup(image.src)}>
            <img src={image.src} alt="" />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup-image">
          <span className="close" onClick={closePopup}>
            &times;
            <span id="escape-button">Esc</span>
          </span>
          <img className="popup-content" src={popupImageSrc} alt="" />
        </div>
      )}
    </div>
  );
};

export default App;
