import React, { useState } from "react";
import "./style.css";

const ProjectViewer = () => {
  const [popupImageVisible, setPopupImageVisible] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState("");

  const handleImageClick = (src) => {
    setPopupImageVisible(true);
    setPopupImageSrc(src);
  };

  const handleCloseClick = () => {
    setPopupImageVisible(false);
  };

  return (
    <div className="container">
      <h1 className="header">Project Viewer</h1>

      <div className="image-container">
        <div className="image">
          <img
            src="./src/images/image1.png"
            alt=""
            onClick={() => handleImageClick("./src/images/image1.png")}
          />
        </div>
        <div className="image">
          <img
            src="./src/images/image2.png"
            alt=""
            onClick={() => handleImageClick("./src/images/image2.png")}
          />
        </div>
        <div className="image">
          <img
            src="./src/images/image3.png"
            alt=""
            onClick={() => handleImageClick("./src/images/image3.png")}
          />
        </div>
        <div className="image">
          <img
            src="./src/images/image4.png"
            alt=""
            onClick={() => handleImageClick("./src/images/image4.png")}
          />
        </div>
        <div className="image">
          <img
            src="./src/images/image5.png"
            alt=""
            onClick={() => handleImageClick("./src/images/image5.png")}
          />
        </div>
        <div className="image">
          <img
            src="./src/images/image6.png"
            alt=""
            onClick={() => handleImageClick("./src/images/image6.png")}
          />
        </div>
      </div>

      {popupImageVisible && (
        <div className="popup-image">
          <span onClick={handleCloseClick}>&times;</span>
          <img src={popupImageSrc} alt="" />
        </div>
      )}
    </div>
  );
};

export default ProjectViewer;
