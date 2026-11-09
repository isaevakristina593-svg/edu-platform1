import React from "react";

export default function LecturerCard({ lecturer, onOpen }) {
  return (
    <article className="lecturer-card">
      <div className="lecturer-card__photo-wrap">
        <img
          src={lecturer.photo}
          alt={lecturer.name}
          className="lecturer-card__photo"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>
      <div className="lecturer-card__body">
        <h3 className="lecturer-card__name">{lecturer.name}</h3>
        <p className="lecturer-card__meta">{lecturer.degree}</p>
        <p className="lecturer-card__meta">Стаж: {lecturer.experience}</p>
        <p className="lecturer-card__disciplines">
          {lecturer.courses.map((c) => c.title).join(" • ")}
        </p>
        <button className="btn-more" onClick={() => onOpen(lecturer.id)}>
          Подробнее
        </button>
      </div>
    </article>
  );
}