import Card from "../ui/Card";

export default function UsersList(props) {
  //   const { username, age } = props.users;

  return (
    <Card>
      <ul className="flex flex-col gap-3 w-full items-center">
        {props.users.map((user, index) => (
          <li
            key={index}
            className="border border-gray-400 shadow-sm w-5/6 flex gap-2 p-2 items-baseline"
          >
            <p className="text-4xl text-gray-700 font-thin capitalize">{user.username}</p>
            <span className="text-sm font-bold text-gray-500">{user.age} years old.</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
