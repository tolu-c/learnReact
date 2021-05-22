import React from "react";

function TodoItem(props) {
  return (
    <div>
      <form method="GET">
        <input type="checkbox" name="todo" id={props.id} />
        <label htmlFor={props.for}>Click This</label>
      </form>
      <p>{props.name}</p>
    </div>
  );
}

export default TodoItem;
