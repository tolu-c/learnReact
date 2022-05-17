import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);

  useEffect(() => {
    if (nameIsValid) {
      console.log("Name is valid!");
    }
  }, [nameIsValid]);

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const nameBlurHandler = (event) => {
    event.preventDefault();
    setNameTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    setNameTouched(true);

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
    setNameIsValid(true);

    console.log(name);

    const enteredValue = nameRef.current.value;
    console.log(enteredValue);
    setName("");
  };

  const nameIsInvalid = !nameIsValid && nameTouched;

  const nameInputClasses = nameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          value={name}
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
