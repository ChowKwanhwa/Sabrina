import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/ca" className="ca">CA</Link>
          <Link to="https://x.com/sabrinaonsol" className="twitter">Twitter</Link>
          <Link to="https://t.me/sabrinaonlive" className="telegram">Telegram</Link>
          <Link to="/dexscreener" className="telegram1">Dexscreener</Link>
        </nav>
        <div className="project-name">
          <Link to="/" className="sabrina">Sabrina</Link>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
