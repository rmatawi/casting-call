import React from 'react';
import './WhoCanApply.css';

const WhoCanApply = () => {
  return (
    <section className="who-can-apply">
      <div className="container">
        <h2 className="section-title">Wij zoeken Surinaams acteertalent!</h2>
        <div className="apply-content">
          <p className="intro-text">
            Dus woon je in Suriname, heb je enige acteerervaring en herken je jezelf in één van de rollen die we zoeken, meld je dan aan.
            Uiteraard is er een financiële vergoeding beschikbaar.
          </p>

          <h3 className="roles-subtitle">Voor de volgende rollen zoeken wij nog talent:</h3>

          <div className="roles-grid">
            <div className="role-card">
              <div className="role-header">
                <h4>Jimmy</h4>
                <span className="age-badge">70-75 jaar</span>
              </div>
              <p className="role-description">
                Jimmy is de man van Enilda, zij is de tante van ons hoofdpersonage Johannes. Jimmy heeft een diepe,
                donkere huidskleur en draagt altijd een vriendelijke uitstraling met zich mee. Het is een warme, lieve
                man met kenmerken die doen denken aan mensen uit het binnenland of misschien wel Coronie. Het is ook
                een trotse man. Zijn beroep zou bijvoorbeeld botomang kunnen zijn.
              </p>
              <p className="shooting-days">Ongeveer 2-3 draaidagen</p>
            </div>

            <div className="role-card">
              <div className="role-header">
                <h4>Rudy</h4>
                <span className="age-badge">75-80 jaar</span>
              </div>
              <p className="role-description">
                Rudy is de oom van Johannes. Een zachte lieve oudere man, een man waarvan zijn smaak net afwijkt van
                dat van de gemiddelde Surinamer. Oom Rudy voelt wit, maar hij is het niet! Hij heeft een blik op het
                leven die buiten de stereotypering van de Surinamer treedt. Oom Rudy is voor een 80 jarige man nog
                goed ter been. En geniet in volle teugen nog van het leven.
              </p>
              <p className="shooting-days">Ongeveer 2-3 draaidagen</p>
            </div>

            <div className="role-card">
              <div className="role-header">
                <h4>Bernhard</h4>
                <span className="age-badge">50-65 jaar</span>
              </div>
              <p className="role-description">
                Bernhard is een witte man en is duidelijk van de Nederlandse Ambassade. Hij woont al lang in Suriname
                maar heeft het land altijd bekeken vanaf achter een veilig hek. Hij is het type wat je niet in Flora
                gaat vinden om een soft te halen. Hij is de man met een woning op Mon Plaisir, rent in de ochtend zijn
                rondje en bemoeit zich verder niet teveel met wat er ECHT speelt in het land.
              </p>
              <p className="shooting-days">Ongeveer 3-5 draaidagen</p>
            </div>
          </div>

          <p className="additional-roles-note">
            Naast bovenstaande rollen zijn er nog diverse andere rollen die ingevuld moeten worden.
            Ook als je jezelf niet herkent in deze specifieke personages, maar wel interesse hebt om deel
            uit te maken van deze productie, nodigen we je uit om je aan te melden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
