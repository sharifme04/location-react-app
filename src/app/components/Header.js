/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PropTypes from "prop-types";

const Header = ({
  title,
  subt1,
  subt2,
  subt3,
  subt4,
  subt5,
  subt6,
  subt7,
  subt8,
}) => {
  return (
    <div>
      <div>
        <span className="title">{title}</span>
      </div>
      <div className="subtitle">
        {subt1 && <span>{subt1}</span>}
        {subt2 && <span ><a  className="link-subtitle" href="#">{subt2}</a> </span>}
        {subt3 && <span>{subt3}</span>}
        {subt4 && <span ><a  className="link-subtitle" href="#">{subt4}</a> </span>}
        {subt5 && <span>{subt5}</span>}
        {subt6 && <span ><a  className="link-subtitle" href="#">{subt6}</a> </span>}
        {subt7 && <span>{subt7}</span>}
        {subt8 && <span ><a  className="link-subtitle" href="#">{subt8}</a> </span>}
      </div>
    </div>
  );
};

Header.propTypes = {
    title: PropTypes.string,
    subt1: PropTypes.string,
    subt2: PropTypes.string,
    subt3: PropTypes.string,
    subt4: PropTypes.string,
    subt5: PropTypes.string,
    subt6: PropTypes.string,
    subt7: PropTypes.string,
    subt8: PropTypes.string,
};

export default Header;
