import React from 'react';
import './HowToApply.css';

const HowToApply = () => {
  return (
    <section className="how-to-apply">
      <div className="container">
        <h2 className="section-title">Hoe werkt het?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Vul het formulier in</h3>
              <p>
                Vertel ons wie je bent. We vragen naar je basisgegevens, achtergrond en
                waarom je wilt deelnemen aan deze film.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Upload je auditievideo</h3>
              <p>
                Maak een korte video van ongeveer één minuut. Stel jezelf voor en laat zien
                wie je bent. Geen professionele opname nodig – authenticiteit is belangrijker
                dan perfectie.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Verstuur voor de deadline</h3>
              <p>
                Controleer je gegevens en stuur het formulier in. Je ontvangt een bevestiging
                per e-mail. Het castingteam beoordeelt alle inzendingen.
              </p>
            </div>
          </div>
        </div>
        <div id="application-form" className="form-container">
          <div className="form-placeholder">
            <p className="form-note">
              Het aanmeldingsformulier wordt hier ingevoegd via Google Forms of een ander formuliersysteem.
            </p>
            <div className="form-embed-note">
              <code>&lt;iframe src="[Google Form URL]" /&gt;</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
