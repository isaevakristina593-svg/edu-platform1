import React from "react";

export default function TariffBlock({ tariffs }) {
  return (
    <div className="tariff-card">
      <h3 className="tariff-card__title">Тарифы на обучение</h3>
      <ul className="tariff-card__list">
        {tariffs.map((t, i) => (
          <li key={i} className="tariff-card__item">
            <span className="tariff-name">{t.name}</span>
            <strong className="tariff-price">{t.price}</strong>
          </li>
        ))}
      </ul>
      <button className="btn-primary-wide">Записаться на занятие</button>
    </div>
  );
}