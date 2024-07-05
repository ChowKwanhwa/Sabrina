import Header from "../components/Header";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="hero-container">
        <div className="hero-section">
          <img
            className="background-image-icon"
            loading="lazy"
            alt=""
            src="/background-image@2x.png"
          />
          <div className="hero-text">
            <h1 className="lorem-ipsum-fsfjsfs">Lorem Ipsum fsfjsfs Sabrina</h1>
          </div>
        </div>
      </section>
      <section className="image-carousell-container">
        <div className="image-carousell">
          <img
            className="lying2-1-icon"
            loading="lazy"
            alt=""
            src="/lying2-1@2x.png"
          />
          <img
            className="bikiniwhite2-1-icon"
            loading="lazy"
            alt=""
            src="/bikiniwhite2-1@2x.png"
          />
          <img
            className="crunched1-1-icon"
            loading="lazy"
            alt=""
            src="/crunched1-1@2x.png"
          />
        </div>
      </section>
      <section className="swap-interface-container">
        <div className="swap-interface" />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
