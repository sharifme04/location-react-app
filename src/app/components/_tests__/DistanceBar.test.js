import React from "react";
import renderer from "react-test-renderer";
import DistanceBar from "../DistanceBar";

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(<DistanceBar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});