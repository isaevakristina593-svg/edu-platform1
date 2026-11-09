import React, { useState } from "react";

export default function CourseBlock({ course }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="course-card">
      <h4 className="course-card__title">{course.title}</h4>
      <p className="course-card__desc">{course.description}</p>
      
      <button className="btn-outline-blue" onClick={() => setOpen(!open)}>
        {open ? "Скрыть программу" : "Показать программу"}
      </button>
      
      {open && (
        <ol className="course-card__program">
          {course.program.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      )}
    </div>
  );
}