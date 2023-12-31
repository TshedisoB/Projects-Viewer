import React, { useState, useEffect, useCallback } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactPlayer from "react-player";
import ProjectInfo from "./ProjectInfo";
import Footer from "./Footer";
import hideHeaderSubtitle from "../helper.js";

import "../styles/App.css";
import imagesData from "../data.json";

const App = () => {
  const [popupVideoContent, setPopupVideoContent] = useState(null);
  const [popupInfoContent, setPopupInfoContent] = useState(null);

  hideHeaderSubtitle();

  const openPopup = (content) => {
    setPopupVideoContent(content);
  };

  const openInfoPopup = (content) => {
    setPopupInfoContent(content);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closePopup = useCallback(() => {
    setPopupVideoContent(null);
    openInfoPopup(null);
  });

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
  }, [closePopup]);

  return (
    <div className="container">
      <h1 className="header">Tshediso's Projects</h1>
      <h2 className="header-subtitle">These are some of my projects</h2>

      <div className="image-container">
        {imagesData.map((item) => (
          <div className="image-content" key={item.id}>
            <div
              className="image-logo-container"
              onClick={() => openPopup(item)}>
              <span className="image-logo">
                <img src={item.imageLogo} alt="" />
              </span>
              <img src={item.imageLink} alt="" />
            </div>

            <div className="description">
              <h4 className="description-title">{item.title}</h4>
              <div className="button-container">
                <button
                  id={`info-button-${item.id}`}
                  onClick={() => openInfoPopup(item)}>
                  Info
                </button>
              </div>
            </div>

            <div
              className="project-status"
              style={{
                display:
                  popupInfoContent && popupInfoContent.id === item.id
                    ? "block"
                    : "none",
              }}>
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
      <Footer />

      {popupVideoContent && (
        <div className="popup-image">
          <div className="esc-content" onClick={closePopup}>
            <span className="close">&times;</span>
            <span id="escape-button">Close</span>
          </div>

          {popupVideoContent.videoLink ? (
            <ReactPlayer
              className="popup-content"
              url={popupVideoContent.videoLink}
              controls
              playing
              width="80%"
              height="80%"
            />
          ) : (
            <img
              className="popup-content"
              src={popupVideoContent.imageLink}
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
