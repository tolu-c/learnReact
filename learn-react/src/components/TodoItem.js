import React from "react";

function TodoItem(props) {
  return (
    <div>
      <form method="GET">
        <input
          type="checkbox"
          name="todo"
          id={props.id}
          onChange={() => console.log("Changed!")}
        />
        <label htmlFor={props.for}>{props.name}</label>
      </form>
      <p>{props.name}</p>
    </div>
  );
}

export default TodoItem;
