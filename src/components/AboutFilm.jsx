import React from 'react';
import './AboutFilm.css';

const AboutFilm = () => {
  return (
    <section className="about-film">
      <div className="container">
        <h2 className="section-title">Over de film</h2>
        <div className="film-content">
          <div className="book-cover-placeholder">
            <img src="/book.jpg" alt="Onder de Paramariboom Book Cover" className="book-cover-image" />
          </div>
          <p className="synopsis">
            Johannes Fretz (29) is als zoon van een zwarte moeder en een witte vader van dubbelbloed,
            maar vooral anderen lijken zich bezig te houden met zijn afkomst. Johannes wil er weinig van
            weten: hij is gewoon Hollands, vindt hij. Daar komt verandering in als hij een uitnodiging
            aanvaardt om op te treden in Paramaribo op de ambassade. Zeker wanneer zijn moeder hem
            vervolgens ongewild en onuitgenodigd achterna reist en hij een wereld wordt in gesleurd die zijn
            leven, en zijn blik op zichzelf en de wereld, voorgoed zal veranderen.
          </p>
          <div className="film-details">
            <div className="detail-item">
              <div className="person-photo-placeholder">
                <img src="/fretz.jpg" alt="Johan Fretz" className="person-photo" />
              </div>
              <span className="detail-label">Gebaseerd op het boek van</span>
              <span className="detail-value">Johan Fretz</span>
            </div>
            <div className="detail-item">
              <div className="person-photo-placeholder">
                <img src="/safi.jpg" alt="Safi Graauw" className="person-photo" />
              </div>
              <span className="detail-label">Regie</span>
              <span className="detail-value">Safi Graauw</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Opnames</span>
              <span className="detail-value">Februari – Maart 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFilm;
