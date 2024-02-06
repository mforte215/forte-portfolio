import { useState, useRef } from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleName = () => {
    //get the current value of box and set it to the state
    setEnteredName(nameInputRef.current.value);
  };

  const handleEmail = () => {
    setEnteredEmail(emailInputRef.current.value);
  };

  const handleMessage = () => {
    setEnteredMessage(messageInputRef.current.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    if (enteredName === "") {
      setErrorMessage("Please Enter A Valid Name!");
    } else if (!validateEmail(enteredEmail)) {
      setErrorMessage("Please Enter A Valid Email!");
    } else if (enteredMessage === "") {
      setErrorMessage("Please Enter A Valid Message!");
    } else {
      alert(`Thanks for the message ${enteredName}!`);
    }
  };

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <div className={styles["content-container"]}>
        <h1>Contact</h1>
        <h2>
          Feel free to reach out to me about any inquries or questions you might
          have for me
        </h2>
        <div className={styles["info-paragraph"]}>
          <form className={styles["contact-form"]}>
            <div className={styles["form-control"]}>
              <label>Name</label>
              <br />
              <input
                required
                className={styles["input-text"]}
                type="text"
                value={enteredName}
                ref={nameInputRef}
                onChange={handleName}
              />
            </div>
            <div className={styles["form-control"]}>
              <label>Email</label>
              <br />
              <input
                required
                className={styles["input-text"]}
                type="email"
                value={enteredEmail}
                ref={emailInputRef}
                onChange={handleEmail}
              />
            </div>
            <div className={styles["form-control"]}>
              <label>Message</label>
              <br />
              <textarea
                required
                onChange={handleMessage}
                value={enteredMessage}
                ref={messageInputRef}
                className={styles["input-text"]}
              ></textarea>
            </div>
            <div className={styles["form-control"]}>
              <input
                onClick={handleSubmission}
                type="submit"
                className={styles["submit-button"]}
              />
            </div>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contact;
