import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JupiterTerminal from '../components/JupiterTerminal';
import ImageSlider from '../components/ImageSlider';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero-container">
        <div className="hero-section">
          <img
            className="background-image-icon"
            loading="lazy"
            alt="Background"
            src="/background-image@2x.png"
          />
          <div className="hero-text">
            <h1 className="lorem-ipsum-fsfjsfs">Sabrina</h1>
          </div>
        </div>
      </section>
      <section className="image-carousell-container">
        <div className="image-carousell">
        <ImageSlider />
        </div>
      </section>
      <section className="swap-interface-container">
        <div className="swap-interface">
          <JupiterTerminal />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
