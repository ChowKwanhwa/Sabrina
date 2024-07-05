import SabrinaLogoIcon from "./SabrinaLogoIcon";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <div className="logo">
          <SabrinaLogoIcon />
        </div>
        <nav className="nav-links">
          <a className="ca">CA</a>
          <a className="twitter">Twitter</a>
          <a className="telegram">Telegram</a>
          <a className="telegram1">Dexscreener</a>
        </nav>
        <div className="project-name">
          <a className="sabrina">Sabrina</a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
