import Button from "../ui/Button";
import Card from "../ui/Card";
import { useState } from "react";
import ErrorModal from "../ui/ErrorModal";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  function addUser(event) {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      !enteredAge.trim().length === 0
    ) {
      setError({
        title: "invalid input!",
        message: "the fields can cannot be empty!",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age!",
        message: "please, enter a valid age! (> 0)",
      });
      return;
    }

    console.log("submitted");
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
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
              name="username"
              value={enteredUsername}
              onChange={usernameChangeHandler}
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
              onChange={ageChangeHandler}
              name="age"
              value={enteredAge}
              className="text-base text-gray-600 focus:border-gray-600 focus:ring-gray-600 invalid:text-red-500 invalid:border-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 invalid:bg-red-200"
            />
          </div>

          <Button type={"submit"}>Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
