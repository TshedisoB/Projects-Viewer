import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [githubProfile, setGithubProfile] = useState("");
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    const validate = () => {
      return firstName.length & email.length;
    };

    const isValid = validate();
    setValid(isValid);
  }, [firstName, email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email, message, githubProfile);
  };

  return (
    <form ref={form} className={classes.root} onSubmit={handleSubmit}>
      <div>
        <h3>Request access</h3>
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
        optional
        value={githubProfile}
        onChange={(e) => setGithubProfile(e.target.value)}
      />

      <TextField
        label="Reason for access"
        variant="filled"
        multiline
        rows={3}
        required
        onChange={(e) => setMessage(e.target.value)}
      />

      <div>
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
  );
};

export default ContactForm;
