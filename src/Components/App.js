import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import ProjectInfo from "./ProjectInfo";

import "../styles/App.css";
import imagesData from "../data.json";

const App = () => {
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
    document.querySelector(".project-status").style.display = "none";
  };

  const handleInfo = () => {
    document.querySelector(".project-status").style.display = "block";
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
          <div className="image-content" key={item.id}>
            <div
              className="image"
              key={item.id}
              onClick={() => openPopup(item)}>
              <span className="image-logo">
                <img src={item.imageLogo} alt="" />
              </span>

              <img src={item.imageLink} alt="" />
            </div>

            <div className="description">
              <h4>{item.title}</h4>
              <div className="button-container">
                <button id="info-button" onClick={handleInfo}>
                  Info
                </button>
              </div>
            </div>

            <div className="project-status" key={item.id}>
              <h4>{item.title}</h4>
              <ProjectInfo
                title={item.title}
                instructions={item.instructions}
                onClose={closePopup}
              />
            </div>
          </div>
        ))}
      </div>

      {popupContent && (
        <div className="popup-image">
          <div className="esc-content" onClick={closePopup}>
            <span className="close">&times;</span>
            <span id="escape-button">Esc</span>
          </div>

          {popupContent.videoLink ? (
            <ReactPlayer
              className="popup-content"
              url={popupContent.videoLink}
              controls
              playing
              width="80%"
              height="80%"
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
