import { useState } from "react";

const TaskAdder = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setTodos((currTodos) => {
      if (!input) {
        return [...currTodos, "Do nothing"];
      }
      return [...currTodos, input];
    });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        ... New activity:
        <input
          value={input}
          placeholder="New activity here"
          onChange={handleChange}
        />
      </label>
      <button className="small_button">Submit</button>
    </form>
  );
};

export default TaskAdder;
