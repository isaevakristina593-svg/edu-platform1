import React, { useState } from "react";
import LecturerCard from "../components/LecturerCard";
import { lecturers } from "../data/data";

export default function LecturersPage({ onOpenLecturer }) {
  const [filter, setFilter] = useState("all");
  
  const filtered = filter === "all" 
    ? lecturers 
    : lecturers.filter((l) => l.gender === filter);

  return (
    <main className="page-container">
      <h1 className="page-title">Лекторы</h1>

      {/* Фильтры */}
      <div className="filters">
        <button 
          className={`filter-btn ${filter === "all" ? "active" : ""}`} 
          onClick={() => setFilter("all")}
        >
          Все
        </button>
        <button 
          className={`filter-btn ${filter === "male" ? "active" : ""}`} 
          onClick={() => setFilter("male")}
        >
          Мужчины
        </button>
        <button 
          className={`filter-btn ${filter === "female" ? "active" : ""}`} 
          onClick={() => setFilter("female")}
        >
          Женщины
        </button>
      </div>

      {/* Сетка карточек */}
      <div className="lecturers-grid">
        {filtered.map((l) => (
          <LecturerCard key={l.id} lecturer={l} onOpen={onOpenLecturer} />
        ))}
      </div>
    </main>
  );
}