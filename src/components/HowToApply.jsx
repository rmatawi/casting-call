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
              <h3>Upload je foto's</h3>
              <p>
                Upload een portretfoto (headshot) en een full body foto. Deze foto's helpen
                het castingteam een beter beeld te krijgen van je uitstraling en voorkomen.
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
          <div className="form-cta">
            <h3>Klaar om je aan te melden?</h3>
            <p className="form-intro">
              Vul het online aanmeldingsformulier in en upload je foto's.
              Het invullen duurt ongeveer 5-10 minuten.
            </p>
            <a
              href="https://forms.gle/8nQrt7MHxjwFQvaH9"
              target="_blank"
              rel="noopener noreferrer"
              className="form-button"
            >
              Open aanmeldingsformulier
            </a>
            <p className="form-note">
              Het formulier opent in een nieuw tabblad
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToApply;
