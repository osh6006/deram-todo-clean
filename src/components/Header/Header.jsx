import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((el, i) => (
          <li key={i}>
            <button onClick={() => onFilterChange(el)}>{el}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
