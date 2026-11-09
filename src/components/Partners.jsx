import React from "react";

export default function Partners() {
  return (
    <section className="partners-section">
            
      <div className="partners-grid">
        {/* Партнер 1 - ICL */}
        <div className="partner-card">
          <div className="partner-header">
            {/* Ссылка на логотипе (опционально) */}
            <a href="https://icl.ru" target="_blank" rel="noopener noreferrer">
              <img src="/images/icl-logo.jpg" alt="ICL" className="partner-logo" />
            </a>
            {/* Стрелка-ссылка */}
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
            ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая 
            в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг, 
            проектов, решений и продуктов. Компания была основана в 1991 году на базе 
            завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС).
          </p>
        </div>

        {/* Партнер 2 - Татнефть */}
        <div className="partner-card">
          <div className="partner-header">
            <a href="https://tatneft.ru" target="_blank" rel="noopener noreferrer">
              <img src="/images/tatneft-logo.png" alt="Татнефть" className="partner-logo" />
            </a>
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
            в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, 
            нефтехимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и 
            производство оборудования для нефтегазовой отрасли и блок сервисных структур.
          </p>
        </div>
      </div>
    </section>
  );
}