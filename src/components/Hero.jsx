import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="logo-placeholder">
          <img src="/logo.png" alt="Backlot Studio Logo" className="studio-logo" />
        </div>
        <h1 className="hero-title">Casting Call – Onder de Paramariboom</h1>
        <p className="hero-subtitle">Wij zoeken Surinaams acteertalent</p>
        <p className="hero-intro">
          Voor de verfilming van het boek van Johan Fretz zijn we op zoek naar authentiek
          Surinaams acteertalent. Heb jij wat het scherm zoekt? Laat het ons zien.
        </p>
        <button className="cta-button" onClick={scrollToForm}>
          Meld je aan
        </button>
      </div>
    </section>
  );
};

export default Hero;
