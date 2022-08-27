import React from "react";
import renderer from "react-test-renderer";
import Navbar from "../Navbar";

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(<Navbar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
