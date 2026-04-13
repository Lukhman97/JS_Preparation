import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Fetch todos
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error fetching data");
        }
        return res.json();
      })
      .then((data) => setTodos(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Todo List</h1>

      {todos.map((todo) => (
        <div className="card" key={todo.id}>
          <h3>{todo.title}</h3>
          <p>
            Status:{" "}
            {todo.completed ? (
              <span className="done">✅ Done</span>
            ) : (
              <span className="not-done">❌ Not Done</span>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;