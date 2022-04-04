import Button from "../ui/Button";
import Card from "../ui/Card";
import { useState, useRef } from "react";
import ErrorModal from "../ui/ErrorModal";
import Wrapper from "../helpers/Wrapper";

function AddUser(props) {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  function addUser(event) {
    event.preventDefault();

    const enteredName = usernameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (
      enteredName.trim().length === 0 ||
      !enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "invalid input!",
        message: "the fields can cannot be empty!",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age!",
        message: "please, enter a valid age! (> 0)",
      });
      return;
    }

    console.log("submitted");
    props.onAddUser(enteredName, enteredUserAge);
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form
          onSubmit={addUser}
          className="flex flex-col gap-4 items-center justify-center w-5/6"
        >
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="username"
              className="text-lg text-gray-800 font-medium capitalize"
            >
              username
            </label>
            <input
              type="text"
              id="username"
              ref={usernameInputRef}
              name="username"
              className="text-base text-gray-600 focus:border-gray-600 focus:ring-gray-600 invalid:text-red-500 invalid:border-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 invalid:bg-red-200"
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="age"
              className="text-lg text-gray-800 font-medium capitalize"
            >
              age (years)
            </label>
            <input
              type="number"
              id="age"
              ref={ageInputRef}
              name="age"
              className="text-base text-gray-600 focus:border-gray-600 focus:ring-gray-600 invalid:text-red-500 invalid:border-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 invalid:bg-red-200"
            />
          </div>

          <Button type={"submit"}>Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
