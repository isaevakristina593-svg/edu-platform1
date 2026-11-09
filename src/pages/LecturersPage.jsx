import { useEffect, useRef, useState } from "react";
import LecturerCard from "../components/LecturerCard";
import { lecturers } from "../data/data";

export default function LecturersPage({ onOpenLecturer }) {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Ссылка на поле поиска
  const searchRef = useRef(null);

  // Фокус при открытии страницы
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleClearSearch = () => {
    setSearchQuery("");
    searchRef.current.focus();
  };

  const filtered = lecturers.filter((lecturer) => {
    const matchesGender =
      filter === "all" || lecturer.gender === filter;

    const matchesName = lecturer.name
      .toLocaleLowerCase("ru")
      .includes(searchQuery.trim().toLocaleLowerCase("ru"));

    return matchesGender && matchesName;
  });

  return (
    <main className="page-container">
      <h1 className="page-title">Лекторы</h1>

      {/* Поиск и управление фокусом — вариант 12 */}
      <div className="lecturer-search">
        <label htmlFor="lecturer-search">Поиск по ФИО</label>

        <input
          id="lecturer-search"
          ref={searchRef}
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Введите имя преподавателя"
        />

        <button
          type="button"
          className="filter-btn"
          onClick={handleClearSearch}
        >
          Очистить
        </button>
      </div>

      {/* Фильтры */}
      <div className="filters">
        <button
          type="button"
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          Все
        </button>

        <button
          type="button"
          className={`filter-btn ${filter === "male" ? "active" : ""}`}
          onClick={() => setFilter("male")}
        >
          Мужчины
        </button>

        <button
          type="button"
          className={`filter-btn ${filter === "female" ? "active" : ""}`}
          onClick={() => setFilter("female")}
        >
          Женщины
        </button>
      </div>

      {/* Результаты поиска */}
      {filtered.length > 0 ? (
        <div className="lecturers-grid">
          {filtered.map((lecturer) => (
            <LecturerCard
              key={lecturer.id}
              lecturer={lecturer}
              onOpen={onOpenLecturer}
            />
          ))}
        </div>
      ) : (
        <p role="status">Лекторы не найдены</p>
      )}
    </main>
  );
}