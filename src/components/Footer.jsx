import SabrinaLogoIcon from "./SabrinaLogoIcon";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <section className={`footer ${className}`}>
      <footer className="footer-content">
        <div className="logo1">
          <SabrinaLogoIcon />
        </div>
        <div className="footer-links">
          <div className="ca1">CA</div>
          <div className="twitter1">Twitter</div>
          <div className="telegram2">Telegram</div>
          <div className="telegram3">Dexscreener</div>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
