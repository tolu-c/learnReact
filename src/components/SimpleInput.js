import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameRef = useRef();
  const [name, setName] = useState("");

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (name.trim() === '') {
      return
    }

    console.log(name);

    const enteredValue = nameRef.current.value;
    console.log(enteredValue);
    setName('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          type="text"
          value={name}
          id="name"
          onChange={nameChangeHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
