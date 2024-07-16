import React, { useState } from "react";
import { useTodo } from "../Contexts/index";

function TodoForm() {
  const [todoTxt, setTodoTxt] = useState("");
  const { addTodo } = useTodo();

  const submitHandeller = (e) => {
    e.preventDefault();
    if (todoTxt && todoTxt.length>0) {
        addTodo({ todoMsg: todoTxt, completed: false });
    }
    setTodoTxt("");
  };
  return (
    <form onSubmit={submitHandeller} className="flex">
      <input
        value={todoTxt}
        onChange={(e) => setTodoTxt(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
