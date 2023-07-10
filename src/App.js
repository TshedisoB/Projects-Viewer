import React, { useState, useEffect } from "react";
import "./App.css";

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
        <div
          className="image"
          onClick={() => openPopup("../images/image1.png")}>
          <img src="../images/image1.png" alt="" />
          <div className="image-title">Consume Github APIs</div>
        </div>

        <div
          className="image"
          onClick={() => openPopup("../images/image2.png")}>
          <img src="../images/image2.png" alt="" />
          <div className="image-title">Image 2 Title</div>
        </div>

        <div
          className="image"
          onClick={() => openPopup("../images/image3.png")}>
          <img src="../images/image3.png" alt="" />
          <div className="image-title">Image 3 Title</div>
        </div>

        <div
          className="image"
          onClick={() => openPopup("../images/image4.png")}>
          <img src="../images/image4.png" alt="" />
          <div className="image-title">Image 4 Title</div>
        </div>

        <div
          className="image"
          onClick={() => openPopup("../images/image5.png")}>
          <img src="../images/image5.png" alt="" />
          <div className="image-title">Image 5 Title</div>
        </div>

        <div
          className="image"
          onClick={() => openPopup("../images/image6.png")}>
          <img src="../images/image6.png" alt="" />
          <div className="image-title">Image 6 Title</div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-image">
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <img className="popup-content" src={popupImageSrc} alt="" />
        </div>
      )}
    </div>
  );
};

export default App;
