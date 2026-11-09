import React from "react";

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Колонка 1: О платформе */}
        <div className="footer-column">
          <h3 className="footer-logo">Учебная платформа</h3>
          <p className="footer-desc">
            Онлайн и оффлайн обучение для физических и юридических лиц. 
            Помогаем находить экспертов, которые вдохновляют.
          </p>
        </div>

        {/* Колонка 2: Навигация */}
        <div className="footer-column">
          <h4 className="footer-heading">Навигация</h4>
          <ul className="footer-links">
            <li>
              <button onClick={() => onNavigate("home")}>Главная</button>
            </li>
            <li>
              <button onClick={() => onNavigate("partners")}>Партнёры</button>
            </li>
            <li>
              <button onClick={() => onNavigate("about")}>О нас</button>
            </li>
            <li>
              <button onClick={() => onNavigate("lecturers")}>Лекторы</button>
            </li>
          </ul>
        </div>

        {/* Колонка 3: Контакты */}
        <div className="footer-column">
          <h4 className="footer-heading">Контакты</h4>
          <ul className="footer-contacts">
            <li>
              <a href="tel:+70000000000">+7 (000) 000-00-00</a>
            </li>
            <li>
              <a href="mailto:info@edu-platform.ru">info@edu-platform.ru</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Нижняя полоса с копирайтом */}
      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2026 Учебная платформа. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}