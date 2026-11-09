import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  // Проверяем, есть ли сохраненная тема в localStorage, иначе ставим светлую
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // При изменении состояния применяем класс к body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button 
      className="theme-toggle" 
      onClick={() => setIsDark(!isDark)}
      title={isDark ? "Включить светлую тему" : "Включить темную тему"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}