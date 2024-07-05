import PropTypes from "prop-types";
import "./SabrinaLogoIcon.css";

const SabrinaLogoIcon = ({ className = "" }) => {
  return (
    <img
      className={`sabrina-logo-icon ${className}`}
      loading="lazy"
      alt=""
      src="/sabrina-logo.svg"
    />
  );
};

SabrinaLogoIcon.propTypes = {
  className: PropTypes.string,
};

export default SabrinaLogoIcon;
