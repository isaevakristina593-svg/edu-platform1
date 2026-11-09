import React from "react";
import Partners from "../components/Partners";

export default function HomePage({ onNavigate }) {
  return (
    <main className="page-container">
      <section className="hero-section">
        <div className="hero-image-container">
          <img 
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop" 
            alt="Преподаватель ведет лекцию" 
            className="hero-image"
          />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
          </h1>
          <button 
            className="btn-blue"
            onClick={() => onNavigate("lecturers")}
            >
            Найти лектора
           </button>
        </div>
      </section>

           
      <section className="about-section">
                
        <div className="about-content">
          <p className="about-text">
            Наша учебная платформа соединяет компании, образовательные учреждения и НКО 
            с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс подбора, 
            бронирования и организации лекций, помогая находить экспертов, которые не просто 
            делятся знаниями, но и вдохновляют аудиторию.
          </p>
          
          {/* Контейнер для центрирования кнопки */}
          <div className="about-actions">
            <button className="btn-more" onClick={() => onNavigate("about")}>
              Подробнее о платформе
            </button>
          </div>
        </div>
      </section>

       <Partners />
    </main>
  );
}