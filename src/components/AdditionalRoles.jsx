import React from 'react';
import './AdditionalRoles.css';

const AdditionalRoles = () => {
  return (
    <section className="additional-roles">
      <div className="container">
        <h2 className="section-title">Aanvullende rollen</h2>
        <div className="additional-content">
          <p className="intro-text">
            Naast de hoofdrollen zoeken we ook acteertalent voor de volgende bijrollen.
            Deze rollen hebben minder draaidagen maar zijn net zo belangrijk voor het verhaal.
          </p>

          <div className="roles-list">
            <div className="additional-role-card">
              <div className="role-header">
                <h4>Enilda</h4>
                <span className="age-badge">70-75 jaar</span>
              </div>
              <p className="role-description">
                Dit is een typische Surinaamse vrouw. Een vrouw die gewichtig voelt in haar energie.
                Een moderne "Bigi sma". De tante van Johannes die hem samen met Jimmy ontvangt in Suriname.
              </p>
              <p className="shooting-days">Ongeveer 7 draaidagen</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Vrouw in vliegtuig</h4>
                <span className="age-badge">±57 jaar</span>
              </div>
              <p className="role-description">
                Een zwarte Surinaamse vrouw rond de leeftijd in het script.
                Het liefst een personality – een bekend persoon met wat acteertalent of ervaring.
              </p>
              <p className="shooting-days">Ongeveer 3 draaidagen</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Douanier</h4>
                <span className="age-badge">Volwassen</span>
              </div>
              <p className="role-description">
                Mag een wat gezette, dikkere man zijn. Die zweet achter zijn stoel met een ventilator op hem gericht.
              </p>
              <p className="shooting-days">Ongeveer 2 draaidagen</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Ober</h4>
                <span className="age-badge">Jong</span>
              </div>
              <p className="role-description">
                Een leuke jongeman die comedy in zich heeft. Het is een relatief grappige scene.
                Een personality die iconisch voelt voor de Surinamers in Nederland.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Piloot</h4>
                <span className="age-badge">Jong volwassen</span>
              </div>
              <p className="role-description">
                Mag een dubbelbloed piloot zijn. Een jongen die altijd ervan heeft gedroomd te vliegen op zijn thuisland.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Bewaker</h4>
                <span className="age-badge">Oudere man</span>
              </div>
              <p className="role-description">
                Oudere Surinaamse man met een zeer karakteristiek gezicht.
                Het liefst een personality – iemand die we kennen.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Bestuurder</h4>
                <span className="age-badge">±25 jaar</span>
              </div>
              <p className="role-description">
                Een jong Surinaams persoon. Deze scene is zeer Surinaams, dus dicht bij de mensen zelf.
                Ook hier zoeken we bij voorkeur een personality.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>
          </div>

          <p className="closing-note">
            Ook als je jezelf niet herkent in deze specifieke personages, maar wel interesse hebt om deel
            uit te maken van deze productie, nodigen we je uit om je aan te melden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdditionalRoles;
