import React from "react";

export default function AboutPage() {
  return (
    <main className="page-container">
      <h1 className="page-title">О нас</h1>
      
      <p className="about-lead">
        Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
        с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, 
        бронирования и организации лекций, помогая находить экспертов, которые не просто 
        делятся знаниями, но и вдохновляют аудиторию.
      </p>

      <section className="about-info-section">
        <h2 className="about-subtitle">Наша миссия</h2>
        <p className="about-paragraph">
          Сделать качественное образование доступным для физических и юридических лиц, 
          обеспечив прозрачный выбор лекторов и удобный процесс организации занятий.
        </p>
      </section>

      <section className="about-info-section">
        <h2 className="about-subtitle">Ценности</h2>
        <ul className="about-values-list">
          <li>
            <strong>Экспертность</strong> — только проверенные преподаватели с научной 
            степенью или практическим опытом.
          </li>
          <li>
            <strong>Прозрачность</strong> — открытые тарифы и программы дисциплин.
          </li>
          <li>
            <strong>Гибкость</strong> — онлайн/оффлайн, индивидуально и в группах.
          </li>
        </ul>
      </section>
    </main>
  );
}