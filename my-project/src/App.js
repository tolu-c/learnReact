import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

import { useState } from "react";

export default function App() {
  const [usersList, setUsersList] = useState([]);

  function getUser(username, age) {
    setUsersList((prevUserList) => {
      return [...prevUserList, { username: username, age: age }];
    });
  }

  return (
    <>
      <AddUser onAddUser={getUser} />
      <UsersList users={usersList} />
    </>
  );
}
