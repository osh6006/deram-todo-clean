import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText("");
      return;
    }
    onAdd({ id: Date.now(), text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button>Add</button>
    </form>
  );
}
