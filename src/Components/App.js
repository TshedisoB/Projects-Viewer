import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactPlayer from "react-player";

import RestrictedModal from "./RestrictedModal.js";
import VideoIndicator from "./VideoIndicator.js";
import ProjectInfo from "./ProjectInfo.js";
import imagesData from "../data.json";
import AboutMe from "./AboutMe.js";
import Footer from "./Footer.js";
import SignUp from "./SignUp.js";
import "../styles/App.css";

const App = () => {
  const [popupVideoContent, setPopupVideoContent] = useState(null);
  const [popupInfoContent, setPopupInfoContent] = useState(null);
  const [restrictedModalOpen, setRestrictedModalOpen] = useState(false);

  const handleOpenRestrictedModal = (value) => {
    if (restrictedModalOpen && !value) {
      setTimeout(() => {
        setRestrictedModalOpen(value);
      }, 2500);
      return;
    }
    setRestrictedModalOpen(value);
  };

  const redirectToRepo = (url) => {
    if (url === "restricted") {
      handleOpenRestrictedModal(true);
      return;
    }
    window.open(url, "_blank");
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closePopup = () => {
    setPopupVideoContent(null);
    setPopupInfoContent(null);
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
  }, [closePopup]);

  return (
    <div className="container">
      <h1 className="header">Tshediso's Portfolio</h1>
      <AboutMe />
      <SignUp />
      <h2 className="header-subtitle">Here are some of my projects</h2>
      <div className="image-container">
        {imagesData.map((item) => (
          <div className="image-content" key={item.id}>
            <div
              className="image-logo-container"
              onClick={() => setPopupVideoContent(item)}>
              <VideoIndicator />
              <span className="image-logo">
                {Object.keys(item.imageLogo).map((key) => (
                  <img key={key} src={item.imageLogo[key]} alt="" />
                ))}
              </span>

              <img src={item.imageLink} alt="" />
            </div>

            <div className="description">
              <h4 className="description-title">{item.title}</h4>
              <div className="button-container">
                <button
                  id={`info-button-${item.id}`}
                  onClick={() => redirectToRepo(item.repoLink)}
                  dangerouslySetInnerHTML={{ __html: "&lt;code/&gt;" }}
                />

                <button
                  id={`info-button-${item.id}`}
                  onClick={() => setPopupInfoContent(item)}>
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

      <div className="restricted-container">
        <RestrictedModal
          open={restrictedModalOpen}
          handleClose={() => handleOpenRestrictedModal(false)}
        />
      </div>
    </div>
  );
};

export default App;
