import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((el, i) => (
          <li key={i}>
            <button
              className={`${styles.filter} ${filter === el && styles.selected}`}
              onClick={() => onFilterChange(el)}
            >
              {el}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
