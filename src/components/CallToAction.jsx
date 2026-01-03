import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Klaar om je aan te melden?</h2>
          <p className="cta-text">
            Dit is jouw kans om deel uit te maken van een bijzonder verhaal.
            We kijken ernaar uit je te ontmoeten.
          </p>
          <button className="cta-button" onClick={scrollToForm}>
            Meld je nu aan
          </button>
          <div className="privacy-note">
            <p>
              Jouw gegevens worden vertrouwelijk behandeld en uitsluitend gebruikt voor deze
              casting. Het selectieproces kan enkele weken duren. We nemen contact op met
              geselecteerde kandidaten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
