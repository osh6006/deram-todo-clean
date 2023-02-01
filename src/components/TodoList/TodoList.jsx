import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

// 투두 에서는 전체적인 데이터를 보여주는 역할만 한다.

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = todo => {
    // 새로운 투두를 todos에 업데이트 해야 함
    setTodos([...todos, todo]);
  };
  const handleUpdate = updated => {
    // 업데이트된 아이디와 동일하다면 업데이트로 바꿔줌
    setTodos(todos.map(el => (el.id === updated.id ? updated : el)));
  };
  const handleDelete = deleted => {
    // 삭제된 아이디를 제외한 배열을 리턴
    setTodos(todos.filter(el => el.id !== deleted.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map(item => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          ></Todo>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter(todo => todo.status === filter);
}

function readTodosFromLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

export default TodoList;
