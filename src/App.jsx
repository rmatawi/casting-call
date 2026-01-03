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
      <AdditionalRoles />
      <HowToApply />
      <CallToAction />
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Onder de Paramariboom – Casting Call</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
