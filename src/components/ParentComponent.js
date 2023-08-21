import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write code", completed: false },
    { id: 3, text: "Go for a walk", completed: false },
  ]);

  const handleCompleteTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent todos={todos} onCompleteTodo={handleCompleteTodo} />
    </div>
  );
}

export default ParentComponent;
