import React from "react";
import { ReactComponent as CarSvg } from "../assets/icons/car-icon.svg";
import { ReactComponent as BusSvg } from "../assets/icons/bus-icon.svg";

const DistanceBar = () => {
  return (
    <div className="bar-container">
      <div className="distance-bar">
        <div className="car">
          <CarSvg />
          <p>24.1 km</p>
        </div>
        <div className="bus">
          <BusSvg />
          <p>24.8 km</p>
        </div>
      </div>
      <div className="triangle-container">
        <div className="triangle"></div>
      </div>
    </div>
  );
};

DistanceBar.propTypes = {};

export default DistanceBar;
