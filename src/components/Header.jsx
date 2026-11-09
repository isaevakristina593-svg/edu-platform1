import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ currentPage, onNavigate }) {
  const links = [
    { key: "home", label: "Главная" },
    { key: "partners", label: "Партнёры" },
    { key: "about", label: "О нас" },
    { key: "lecturers", label: "Лекторы" },
  ];

  return (
    <header className="site-header">
      <div className="header-container">
        
        {/* Меню (плашка) */}
        <nav className="nav-bar">
          {links.map((link) => (
            <button
              key={link.key}
              className={`nav-link ${currentPage === link.key ? "active" : ""}`}
              onClick={() => onNavigate(link.key)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Кнопка переключения темы (справа) */}
        <div className="header-theme-btn">
          <ThemeToggle />
        </div>
        
      </div>
    </header>
  );
}