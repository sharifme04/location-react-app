import React from "react";
import PropTypes from "prop-types";

const HeaderLayout = ({ children }) => {
  return <div className="headerContainer">{children}</div>;
};

HeaderLayout.propTypes = {
  children: PropTypes.any,
};

export default HeaderLayout;
