import React from "react";
import PropTypes from "prop-types";

const DetailsCard = ({ name, weight, time, bgColor, customClass, icon }) => {
  return (
    <div
      className={`details-card ${customClass}`}
      style={{ backgroundColor: bgColor || "" }}
    >
      <div className="details-card-title">
        {icon && <img src={icon} width="24" height="24" alt="logo-icon" />}
        {name && <div className="card-inner-title"> {name}</div>}
      </div>
      {weight && <div className="card-weight">{weight}</div>}
      {time && <div className="card-time">{time}</div>}
    </div>
  );
};

DetailsCard.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.string,
  time: PropTypes.string,
  bgColor: PropTypes.string,
  customClass: PropTypes.string,
  icon: PropTypes.any,
};

export default DetailsCard;
