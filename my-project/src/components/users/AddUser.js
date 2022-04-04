import Button from "../ui/Button";
import Card from "../ui/Card";

function AddUser(props) {
  function addUser(event) {
    event.preventDefault();
    console.log("submitted");
  }

  return (
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
            name="age"
            className="text-base text-gray-600 focus:border-gray-600 focus:ring-gray-600 invalid:text-red-500 invalid:border-red-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 invalid:bg-red-200"
          />
        </div>

        <Button type={"submit"}>Add user</Button>
      </form>
    </Card>
  );
}

export default AddUser;
