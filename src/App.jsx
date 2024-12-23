import { useState } from "react";

function App() {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = (text) => {
    setTodoList((prevTodos) => [...prevTodos, text]);
    setTodoText("");
  };

  const deleteTodo = (id) => {
    const newList = todoList.filter((todo, index) => id !== index);
    setTodoList(newList);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen flex-col gap-10">
        <div className="text-4xl">TODO APP</div>
        <div className="flex gap-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo(todoText);
            }}
          >
            <input
              type="text"
              placeholder="add todo..."
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
            />
            <button className="p-2 border rounded-2xl" type="submit">
              Add
            </button>
          </form>
        </div>
        {todoList?.map((todo, index) => (
          <div key={index}>
            {todo}
            <button
              onClick={() => {
                deleteTodo(index);
              }}
              className="ml-3"
            >
              x
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
