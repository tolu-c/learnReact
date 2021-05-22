import React from "react";
import TodoItem from "./TodoItem";

function Todo() {
  return (
    <div>
      <TodoItem id="to-do" for="to-do" name='tolu' />
      <TodoItem id="todo" for="todo" name='tol' />
      <TodoItem id="toDo" for="toDo" name='to' />
      <TodoItem id="TODO" for="TODO" name='t' />
    </div>
  );
}

export default Todo;
