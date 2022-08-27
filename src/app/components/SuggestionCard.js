import React from "react";
import PropTypes from "prop-types";

const SuggestionCard = ({
  locations,
  handlebothLocation,
  handleSuggestion,
  display,
}) => {
  return (
    locations?.length && (
      <div className="suggestion-card" style={{ display: display }}>
        <div className="card" style={{ width: "21rem" }}>
          <div className="loading">
            <div className="d-flex align-items-center">
              <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
            <p>Standort verwenden</p>
          </div>
          <ul className="list-group list-group-flush">
            {locations.length &&
              locations.map((e, i) => (
                <li
                  className="list-group-item"
                  key={e?.id + i}
                  onClick={() => {
                    handlebothLocation(e);
                    handleSuggestion("none");
                  }}
                >
                  <p className="area">{e?.objectName}</p>
                  <p className="city">{e?.locality}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  );
};

SuggestionCard.propTypes = {
  handlebothLocation: PropTypes.func,
  handleSuggestion: PropTypes.func,
  display: PropTypes.string,
  locations: PropTypes.array,
};

export default SuggestionCard;
