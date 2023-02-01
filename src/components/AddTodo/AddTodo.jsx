import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = e => setText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length === 0) {
      setText("");
      return;
    }
    onAdd({ id: uuidV4(), text, status: "active" });
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Add Todo"
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
