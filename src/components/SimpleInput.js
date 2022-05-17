import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);

  const nameIsValid = name.trim() !== "";
  const emailIsValid = email.trim() !== "" && email.trim().includes("@");

  const nameIsInvalid = !nameIsValid && nameTouched;
  const emailIsInvalid = !emailIsValid && emailTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const nameBlurHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
  };

  const emailBlurHandler = (event) => {
    event.preventDefault();
    setEmailTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(name);
    setName("");
    setEmail("");
    setNameTouched(false);
    setEmailTouched(false);
  };

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={nameInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          value={email}
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailIsInvalid && (
          <p className="error-text">
            Email must not be empty and must have the "@"
          </p>
        )}
        {/* {!email.trim().includes('@') && <p className="error-text">Email is missing the "@"</p>} */}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
