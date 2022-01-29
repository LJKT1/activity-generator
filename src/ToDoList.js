import { useState } from "react";
import newTasks from "./data";
import TaskAdder from "./TaskAdder";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const index = Math.floor(Math.random() * newTasks.length);
  const activity = newTasks[index];

  return (
    <>
      <button
        onClick={() => {
          setTodos((currTodos) => {
            const newTodos = [...currTodos];
            newTodos.push(activity.task);
            return newTodos;
          });
        }}
      >
        Bored?
      </button>
      <button
        onClick={() => {
          setTodos((currTodos) => {
            const newTodos = [...currTodos];
            newTodos.shift();
            return newTodos;
          });
        }}
      >
        Busy?
      </button>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button
                className="small_button"
                onClick={() => {
                  setTodos((currTodos) => {
                    const newTodos = [...currTodos];
                    newTodos.splice(index, 1);
                    return newTodos;
                  });
                }}
              >
                Done?
              </button>
            </li>
          );
        })}
      </ul>
      <TaskAdder setTodos={setTodos} />
    </>
  );
};

export default ToDoList;
