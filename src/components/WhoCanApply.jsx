import React from "react";
import "./WhoCanApply.css";

const WhoCanApply = () => {
  return (
    <section className="who-can-apply">
      <div className="container">
        <h2 className="section-title">Wij zoeken Surinaams acteertalent!</h2>
        <div className="apply-content">
          <p className="intro-text">
            Dus woon je in Suriname, heb je enige acteerervaring en herken je
            jezelf in één van de rollen die we zoeken, meld je dan aan.
            Uiteraard is er een financiële vergoeding beschikbaar.
          </p>

          <h3 className="roles-subtitle">
            Voor de volgende rollen zoeken wij nog talent:
          </h3>

          <div className="roles-grid">
            <div className="role-card">
              <div className="role-header">
                <h4>Jimmy</h4>
                <span className="age-badge">70-75 jaar</span>
              </div>
              <p className="role-description">
                Jimmy is de man van Enilda, zij is de tante van ons
                hoofdpersonage Johannes. Jimmy heeft een diepe, donkere
                huidskleur en draagt altijd een vriendelijke uitstraling met
                zich mee. Het is een warme, lieve man met kenmerken die doen
                denken aan mensen uit het binnenland of misschien wel Coronie.
                Het is ook een trotse man. Zijn beroep zou bijvoorbeeld botomang
                kunnen zijn.
              </p>
              <p className="shooting-days">Ongeveer 3 draaidagen</p>
            </div>

            <div className="role-card">
              <div className="role-header">
                <h4>Rudy</h4>
                <span className="age-badge">75-80 jaar</span>
              </div>
              <p className="role-description">
                Rudy is de oom van Johannes. Een zachte lieve oudere man, een
                man waarvan zijn smaak net afwijkt van dat van de gemiddelde
                Surinamer. Oom Rudy voelt wit, maar hij is het niet! Hij heeft
                een blik op het leven die buiten de stereotypering van de
                Surinamer treedt. Oom Rudy is voor een 80 jarige man nog goed
                ter been. En geniet in volle teugen nog van het leven.
              </p>
              <p className="shooting-days">Ongeveer 4 draaidagen</p>
            </div>

            <div className="role-card">
              <div className="role-header">
                <h4>Bernhard</h4>
                <span className="age-badge">50-65 jaar</span>
              </div>
              <p className="role-description">
                Bernhard is een witte man en is duidelijk van de Nederlandse
                Ambassade. Hij woont al lang in Suriname maar heeft het land
                altijd bekeken vanaf achter een veilig hek. Hij is het type wat
                je niet in Flora gaat vinden om een soft te halen. Hij is de man
                met een woning op Mon Plaisir, rent in de ochtend zijn rondje en
                bemoeit zich verder niet teveel met wat er ECHT speelt in het
                land.
              </p>
              <p className="shooting-days">Ongeveer 5 draaidagen</p>
            </div>
            
            {/*
            <div className="additional-role-card">
              <div className="role-header">
                <h4>Enilda</h4>
                <span className="age-badge">70-75 jaar</span>
              </div>
              <p className="role-description">
                Dit is een typische Surinaamse vrouw. Een vrouw die gewichtig
                voelt in haar energie. Een moderne "Bigi sma". De tante van
                Johannes die hem samen met Jimmy ontvangt in Suriname.
              </p>
              <p className="shooting-days">Ongeveer 7 draaidagen</p>
            </div>
            */}

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Vrouw in vliegtuig</h4>
                <span className="age-badge">±57 jaar</span>
              </div>
              <p className="role-description">
                Een zwarte Surinaamse vrouw rond de leeftijd in het script. Het
                liefst een personality – een bekend persoon met wat acteertalent
                of ervaring.
              </p>
              <p className="shooting-days">Ongeveer 3 draaidagen</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Mennoniet</h4>
                <span className="age-badge">Volwassen</span>
              </div>
              <p className="role-description">
                Een Mennoniet personage voor deze productie.
              </p>
              <p className="shooting-days">Ongeveer 2 draaidagen</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Douanier</h4>
                <span className="age-badge">Volwassen</span>
              </div>
              <p className="role-description">
                Mag een wat gezette, dikkere man zijn. Die zweet achter zijn
                stoel met een ventilator op hem gericht.
              </p>
              <p className="shooting-days">Ongeveer 2 draaidagen</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Kok</h4>
                <span className="age-badge">Volwassen</span>
              </div>
              <p className="role-description">
                Dit zou nog mogelijk kunnen met een van de koks uit het hotel
                zelf. Het is een simpele tekst. Laten we hier een aantal koks
                van het hotel zelf voor zien en spreken.
              </p>
              <p className="shooting-days">Ongeveer 2 draaidagen</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Ober</h4>
                <span className="age-badge">Jong</span>
              </div>
              <p className="role-description">
                Een leuke jongeman die comedy in zich heeft. Het is een relatief
                grappige scene. Een personality die iconisch voelt voor de
                Surinamers in Nederland.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Radio Host</h4>
                <span className="age-badge">Volwassen</span>
              </div>
              <p className="role-description">
                Lijkt me leuk om hier met een daadwerkelijk bekende radio host
                te werken. Hij stelt Johannes enkel vragen. Dit komt heel dicht
                bij zijn daadwerkelijke werk.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Piloot</h4>
                <span className="age-badge">Jong volwassen</span>
              </div>
              <p className="role-description">
                Mag een dubbelbloed piloot zijn. Een jongen die altijd ervan
                heeft gedroomd te vliegen op zijn thuisland.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Campagne Vrouw (stem)</h4>
                <span className="age-badge">Volwassen</span>
              </div>
              <p className="role-description">
                Mooie campagne stem, komt niet in beeld alleen de stem.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Bewaker</h4>
                <span className="age-badge">Oudere man</span>
              </div>
              <p className="role-description">
                Oudere Surinaamse man met een zeer karakteristiek gezicht. Het
                liefst een personality – iemand die we kennen.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>

            <div className="additional-role-card">
              <div className="role-header">
                <h4>Bestuurder</h4>
                <span className="age-badge">±25 jaar</span>
              </div>
              <p className="role-description">
                Een jong Surinaams persoon. Deze scene is zeer Surinaams, dus
                dicht bij de mensen zelf. Ook hier zoeken we bij voorkeur een
                personality.
              </p>
              <p className="shooting-days">Ongeveer 1 draaidag</p>
            </div>
          </div>

          <p className="closing-note">
            Ook als je jezelf niet herkent in deze specifieke personages, maar
            wel interesse hebt om deel uit te maken van deze productie, nodigen
            we je uit om je aan te melden.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
