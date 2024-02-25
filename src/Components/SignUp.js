import { useState, useEffect } from "react";

import { auth, database } from "../firebase.js";

function SignUp() {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  function trimDate() {
    const date = new Date();
    const dateStr = date.toDateString();
    const time = date.toLocaleTimeString();

    return dateStr + " - " + time;
  }

  useEffect(() => {
    const signInAnonymously = async () => {
      if (userId) {
        console.log("Id already exists");
        return;
      }
      try {
        await auth.signInAnonymously();
        auth.onAuthStateChanged((firebaseUser) => {
          if (firebaseUser) {
            if (localStorage.getItem("userId") === null) {
              setUserId(firebaseUser.uid);
              localStorage.setItem("userId", firebaseUser.uid);

              database.ref("users/" + firebaseUser.uid).set({
                timestamp: trimDate(),
              });
            }
            console.log("User: ", firebaseUser.uid);
          } else {
            console.log("User is signed out");
          }
        });
      } catch (error) {
        console.error("Error signing in anonymously:", error);
      }
    };

    signInAnonymously();
  }, [userId]);

  return null;
}

export default SignUp;
