import React from "react";

const ProjectInfo = ({ title, instructions, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal-header">
          <h1>{title}</h1>
        </div>
        <div className="modal-body">
          <h3>Project Objective</h3>
          <ul>
            {Object.entries(instructions).map(([key, instruction]) => (
              <li key={key}>{instruction}</li>
            ))}
          </ul>
        </div>
        <div className="modal-footer">
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
