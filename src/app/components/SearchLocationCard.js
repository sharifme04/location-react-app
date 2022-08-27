import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaRegDotCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiArrowUpDownLine } from "react-icons/ri";

const SearchLocationCard = ({
  values,
  handleSuggestion,
  handleChange,
  handetripSearch,
  handleLocationPoint,
}) => {
  let navigate = useNavigate();

  return (
    <div className="search-location">
      <div className="card-title">Wähle Deine Pendelroute </div>
      <div>
        <p className="card-subtitle">
          um zu sehen, wie viel CO2 Du mit VVS sparen kannst
        </p>
      </div>
      <div className="input-container">
        <div className="icons-column">
          <FaRegDotCircle className="top-icon" />
          <div className="vertical-line"></div>
          <IoLocationSharp className="bottom-icon" size={20} />
        </div>
        <div className="input-group">
          <input
            className="input-style"
            name="startPoint"
            onFocus={() => {
              handleLocationPoint("startPoint");
              handleSuggestion("");
            }}
            value={values?.startPoint}
            onChange={handleChange}
            placeholder="von : Ort, Haltestelle, Adresse, POI"
          ></input>
          <input
            className="input-style"
            name="endPoint"
            onFocus={() => {
              handleLocationPoint("endPoint");
              handleSuggestion("");
            }}
            value={values?.endPoint}
            onChange={handleChange}
            placeholder="von : Ort, Haltestelle, Adresse, POI"
          ></input>
        </div>
        <div className="right-arrow">
          <div></div>
          <div>
            <RiArrowUpDownLine />
          </div>
          <div></div>
        </div>
      </div>
      <button
        className="weiterBtn"
        onClick={() => {
          navigate("/details");
          handetripSearch();
        }}
      >
        Weiter
      </button>
    </div>
  );
};

SearchLocationCard.propTypes = {
  handleChange: PropTypes.func,
  handleLocationPoint: PropTypes.func,
  handleSuggestion: PropTypes.func,
  handetripSearch: PropTypes.func,
  values: PropTypes.any,
};

export default SearchLocationCard;
