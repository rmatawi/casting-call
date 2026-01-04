import React from 'react';
import Hero from './components/Hero';
import AboutFilm from './components/AboutFilm';
import WhoCanApply from './components/WhoCanApply';
import AdditionalRoles from './components/AdditionalRoles';
import HowToApply from './components/HowToApply';
import CallToAction from './components/CallToAction';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <AboutFilm />
      <WhoCanApply />
      {/* <AdditionalRoles /> */}
      <HowToApply />
      <CallToAction />
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 The Back Lot – Casting Call</p>
          <p className="developer-contact">
            Website ontwikkeld door{' '}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                const user = 'rianmatawi';
                const domain = 'gmail.com';
                window.location.href = `mailto:${user}@${domain}`;
              }}
              className="contact-link"
            >
              Rian Matawi
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
