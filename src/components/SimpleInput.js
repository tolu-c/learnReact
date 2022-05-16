import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true)

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      setNameIsValid(false)
      return
    }
    setNameIsValid(true)

    console.log(name);

    const enteredValue = nameRef.current.value;
    console.log(enteredValue);
    setName('')
  };

  const nameInputClasses = nameIsValid ? 'form-control' : 'form-control invalid'

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
        />
        {!nameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
