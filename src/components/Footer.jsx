import SabrinaLogoIcon from "./SabrinaLogoIcon";
import { Link } from "react-router-dom";
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
          <Link to="/ca" className="ca1">CA</Link>
          <Link to="https://x.com/sabrinaonsol" className="twitter1">Twitter</Link>
          <Link to="https://t.me/sabrinaonlive" className="telegram2">Telegram</Link>
          <Link to="/dexscreener" className="telegram3">Dexscreener</Link>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
