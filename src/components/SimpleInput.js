import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const nameIsValid = name.trim() !== "";
  const nameIsInvalid = !nameIsValid && nameTouched;

  let formIsValid = false;

  if (nameIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);

    if (!nameIsValid) {
      return;
    }

    console.log(name);
    setName("");
    setNameTouched(false);
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
