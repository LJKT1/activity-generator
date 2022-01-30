import { useState } from "react";
import newTasks from "./data";
import TaskAdder from "./TaskAdder";

function refreshPage() {
  window.location.reload(false);
}

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
      <button onClick={refreshPage}>Reset</button>
      <table>
        {todos.map((todo, index) => {
          return (
            <tr key={index}>
              <td className="todo-cells">{todo}</td>
              <td className="done-cells">
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
                  Done!
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <TaskAdder setTodos={setTodos} />
    </>
  );
};

export default ToDoList;
