import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  HeaderLayout,
  Breadcrumb,
  SearchLocationCard,
  SuggestionCard,
} from "../components";
import { ReactComponent as HeaderSliderImageSvg } from "../assets/images/header-slider-image-1.svg";
import { locationsPednding } from "../actions/locations";
import { tripSearchPednding } from "../actions/tripSearch";

const Home = () => {
  const dispatch = useDispatch();
  const [locationPoint, setLocationPoint] = useState("");
  const [display, setDisplay] = useState("");
  const [values, setValues] = useState({
    startPoint: "",
    endPoint: "",
  });

  const handleSuggestion = (value) => setDisplay(value);

  const [idValues, setIdValues] = useState({
    startPointId: "",
    endPointId: "",
  });

  const { locations } = useSelector((state) => state.locationsReducer || []);

  useEffect(() => {
    values[locationPoint] && dispatch(locationsPednding(values[locationPoint]));
  }, [values[locationPoint], dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handlebothLocation = (e) => {
    setValues({ ...values, [locationPoint]: e.objectName + ", " + e.locality });
    setIdValues({ ...idValues, [[locationPoint] + "Id"]: e.id });
  };

  const handleLocationPoint = (value) => {
    setLocationPoint(value);
  };

  const handetripSearch = () => {
    idValues?.startPointId &&
      idValues?.endPointId &&
      dispatch(tripSearchPednding(idValues.startPointId, idValues.endPointId));
  };

  return (
    <div>
      <HeaderLayout>
        <Breadcrumb />
        <Header
          title={"Umweltrechner"}
          subt1={"Umwelt und Preisvergleich zwischen VVS und Deinem Auto"}
        />
      </HeaderLayout>
      <div className="slide-and-search">
        <div className="slide">
          <HeaderSliderImageSvg />
        </div>
        <SearchLocationCard
          values={values}
          handleSuggestion={handleSuggestion}
          handleChange={handleChange}
          handleLocationPoint={handleLocationPoint}
          handetripSearch={handetripSearch}
        />
      </div>
      <SuggestionCard
        locations={locations}
        display={display}
        handleSuggestion={handleSuggestion}
        handlebothLocation={handlebothLocation}
      />
    </div>
  );
};

export default Home;
