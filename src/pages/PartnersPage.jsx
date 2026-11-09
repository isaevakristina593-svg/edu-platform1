import React from "react";

export default function PartnersPage() {
  return (
    <main className="page-container">
      
      <div className="partners-grid">
        {/* Партнер 1 - ICL */}
        <div className="partner-card">
          <div className="partner-header">
            <img src="/images/icl-logo.jpg" alt="ICL" className="partner-logo" />
            <a 
              href="https://icl.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-arrow"
              title="Перейти на сайт ICL"
            >
              ↗
            </a>
          </div>
          <p className="partner-description">
            ICL — высокотехнологичная динамично развивающаяся группа компаний, ведущий 
            российский производитель вычислительной техники, поставщик ИТ-решений. Компания 
            основана в 1991 году. В настоящее время ICL — один из крупнейших в России 
            производителей компьютерной техники и системных интеграторов.
          </p>
          <a href="https://icl.ru" target="_blank" rel="noopener noreferrer" className="partner-link">
            Перейти на сайт →
          </a>
        </div>

        {/* Партнер 2 - Татнефть */}
        <div className="partner-card">
          <div className="partner-header">
            <img src="/images/tatneft-logo.png" alt="Татнефть" className="partner-logo" />
            <a 
              href="https://tatneft.ru" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="partner-arrow"
              title="Перейти на сайт Татнефть"
            >
              ↗
            </a>
          </div>
          <p className="partner-description">
            «Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний, 
            в составе которой нефтегазодобывающие, нефтегазоперерабатывающие, нефтехимические, 
            строительные предприятия; заводы по производству синтетических каучуков; 
            предприятия по реализации нефти, газа, нефтепродуктов и нефтехимической продукции; 
            блок сервисных структур.
          </p>
          <a href="https://tatneft.ru" target="_blank" rel="noopener noreferrer" className="partner-link">
            Перейти на сайт →
          </a>
        </div>
      </div>
    </main>
  );
}