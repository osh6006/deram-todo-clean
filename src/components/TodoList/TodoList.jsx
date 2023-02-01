import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";

// 투두 에서는 전체적인 데이터를 보여주는 역할만 한다.

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "1234", text: "공부하기", status: "active" },
  ]);

  const handleAdd = todo => {
    // 새로운 투두를 todos에 업데이트 해야 함
    setTodos([...todos, todo]);
  };
  return (
    <section>
      <ul>
        {todos.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

export default TodoList;
