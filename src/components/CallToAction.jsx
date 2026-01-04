import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  const scrollToForm = () => {
    document
      .getElementById("application-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="call-to-action">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Klaar om je aan te melden?</h2>
          <p className="cta-text">
            Vul het online aanmeldingsformulier in en upload je motivatievideo
            (max. 30 sec, 100MB). Het invullen duurt ongeveer 5-10 minuten.
          </p>

          <a
            href="https://forms.gle/8nQrt7MHxjwFQvaH9"
            target="_blank"
            rel="noopener noreferrer"
            className="form-button"
          >
            Meld je aan!
          </a>
          <div className="privacy-note">
            <p>
              Jouw gegevens worden vertrouwelijk behandeld en uitsluitend
              gebruikt voor deze casting. Het selectieproces kan enkele weken
              duren. We nemen contact op met geselecteerde kandidaten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
