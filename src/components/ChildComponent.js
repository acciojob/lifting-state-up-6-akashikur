import React from "react";

function ChildComponent({ todos, onCompleteTodo }) {
  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            {!todo.completed && (
              <button onClick={() => onCompleteTodo(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChildComponent;
