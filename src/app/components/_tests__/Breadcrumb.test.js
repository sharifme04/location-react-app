import React from "react";
import renderer from "react-test-renderer";
import Breadcrumb from "../Breadcrumb";


test("snapshot Form renders with empty props", () => {
  const component = renderer.create(<Breadcrumb />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});