import React from "react";
import renderer from "react-test-renderer";
import DetailsCard from "../DetailsCard";
import logoIcon from "../../assets/icons/logo-icon.png";

test("snapshot Form renders with empty component", () => {
  const component = renderer.create(<DetailsCard />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(
    <DetailsCard
      logo={"logo"}
      name={"Auto"}
      weight={"2.032 kg"}
      time={"CO2 / Jahr"}
      customClass={"details-card-custom-style1"}
      icon={logoIcon}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
