import React from "react";
import { useSelector } from "react-redux";
import {
  Header,
  HeaderLayout,
  Breadcrumb,
  DistanceBar,
  DetailsCard,
} from "../components";
import carIcon from "../assets/icons/car-icon.png";
import logoIcon from "../assets/icons/logo-icon.png";

const Details = () => {
  const { tripSearch, isLoading } = useSelector(
    (state) => state.tripSearchReducer || {}
  );

  console.log("tripSearch", tripSearch);

  return isLoading ? (
    <div className="d-flex justify-content-center custom-center">
      <div className="spinner-border custom-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  ) : (
    <div>
      <HeaderLayout>
        <Breadcrumb />
        <Header
          title={"Umweltrechner"}
          subt1={"Penden"}
          subt2={"210 Tag"}
          subt3={"mit"}
          subt4={"Miteklase"}
          subt5={"von"}
          subt6={"Tam"}
          subt7={"bis"}
          subt8={"Statmit"}
        />
      </HeaderLayout>
      <DistanceBar />
      <div className="card-container">
        <div className="details-card-subtitle">
          <div className="custom-card-subtitle">
            Auswirkungen auf die Umwelt
          </div>
          <div className="custom-card-group">
            <DetailsCard
              logo={"logo"}
              name={"Auto"}
              weight={"2.032 kg"}
              time={"CO2 / Jahr"}
              customClass={"details-card-custom-style1"}
              icon={carIcon}
            />
            <DetailsCard
              logo={"logo"}
              name={"VVS Abo"}
              weight={"758 kg"}
              time={"CO2 / Jahr"}
              bgColor={"#fc631e"}
              customClass={"details-card-custom-style2"}
              icon={logoIcon}
            />
          </div>
        </div>
        <div className="details-card-subtitle">
          <div className="custom-card-subtitle">
            Kosteneinschätzung für ein Jahr
          </div>
          <div className="custom-card-group">
            <DetailsCard customClass={"details-card-custom-style1"} />
            <DetailsCard customClass={"details-card-custom-style2"} />
          </div>
        </div>
      </div>
      <div className="next-step">
        <p>Wie entstehen diese Werte?</p>
      </div>
      <div className="card-layers">
        <div>
          <div className="lower-square"></div>
          <div className="upper-square"></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
