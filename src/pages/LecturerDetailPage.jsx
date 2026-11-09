import React from "react";
import CourseBlock from "../components/CourseBlock";
import TariffBlock from "../components/TariffBlock";

export default function LecturerDetailPage({ lecturer, onBack }) {
  if (!lecturer) return null;
  
  return (
    <main className="page-container">
      {/* Кнопка назад */}
      <button className="back-btn" onClick={onBack}>
        ← Назад к лекторам
      </button>

      {/* Шапка профиля */}
      <div className="lecturer-detail">
        <div className="lecturer-detail__photo">
          <img
            src={lecturer.photo}
            alt={lecturer.name}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
        <div className="lecturer-detail__info">
          <h1 className="lecturer-detail__name">{lecturer.name}</h1>
          
          <div className="lecturer-detail__meta-list">
            <p><strong>Образование:</strong> {lecturer.education}</p>
            <p><strong>Стаж:</strong> {lecturer.experience}</p>
            <p><strong>Учёная степень:</strong> {lecturer.degree}</p>
          </div>
        </div>
      </div>

      <div className="lecturer-detail__content">
        {/* Левая колонка с дисциплинами */}
        <section className="lecturer-courses-section">
          <h2 className="section-subtitle">Преподаваемые дисциплины</h2>
          {lecturer.courses.map((c, i) => (
            <CourseBlock key={i} course={c} />
          ))}
        </section>

        {/* Правая колонка с тарифами */}
        <aside className="lecturer-tariffs-section">
          <TariffBlock tariffs={lecturer.tariffs} />
        </aside>
      </div>
    </main>
  );
}