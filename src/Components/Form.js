import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@mui/material/Alert";

import { database } from "../firebase.js";
import { trimDate } from "../helper.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const ContactForm = ({ handleClose }) => {
  const classes = useStyles();
  const form = useRef();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [githubProfile, setGithubProfile] = useState("");
  const [isValid, setValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const validateForm = () => {
      return (
        firstName.trim().length > 0 &&
        email.trim().length > 0 &&
        message.trim().length > 5
      );
    };

    setValid(validateForm());
  }, [firstName, email, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        firstName: firstName.trim(),
        email: email.trim(),
        githubProfile: githubProfile.trim(),
        message: message.trim(),
        date: trimDate(),
      };

      await database.ref("formSubmissions").push(formData);
      setShowSuccess(true);
      handleClose();
    } catch (error) {
      console.error("Error storing form data in Firebase:", error);
      setError("An error occurred while submitting. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      {error && (
        <Alert variant="filled" severity="error">
          {error}
        </Alert>
      )}
      {showSuccess && (
        <Alert variant="filled" severity="success">
          Form submitted successfully!
        </Alert>
      )}

      <form ref={form} className={classes.root} onSubmit={handleSubmit}>
        <div>
          <h3 id="request-access">Request access</h3>
        </div>
        <TextField
          label="Full Name"
          variant="filled"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <TextField
          label="Email"
          variant="filled"
          type="email"
          name="user_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Github Profile"
          variant="filled"
          value={githubProfile}
          onChange={(e) => setGithubProfile(e.target.value)}
        />

        <TextField
          label="Reason for access"
          variant="filled"
          multiline
          rows={3}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="form-buttons">
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Cancel
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isValid}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
