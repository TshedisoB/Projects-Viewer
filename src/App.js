import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";

import "./App.css";
import imagesData from "./data.json";

const App = () => {
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
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
        {imagesData.map((item) => (
          <div className="image" key={item.id} onClick={() => openPopup(item)}>
            <img src={item.imageLink} alt="" />
            <div className="image-title">{item.title}</div>
          </div>
        ))}
      </div>

      {popupContent && (
        <div className="popup-image">
          <span className="close" onClick={closePopup}>
            &times;
            <span id="escape-button">Esc</span>
          </span>
          {popupContent.videoLink ? (
            <ReactPlayer
              className="popup-content"
              url={popupContent.videoLink}
              controls
              playing
            />
          ) : (
            <img
              className="popup-content"
              src={popupContent.imageLink}
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
