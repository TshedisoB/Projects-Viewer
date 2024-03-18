import React from "react";
import Dialog from "@material-ui/core/Dialog";

import Form from "./Form.js";

const RestrictedModal = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div>
        <Form handleClose={handleClose} />
      </div>
    </Dialog>
  );
};

export default RestrictedModal;
