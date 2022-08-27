import React from "react";
import renderer from "react-test-renderer";
import HeaderLayout from "../HeaderLayout";

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(<HeaderLayout />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with  props", () => {
  const component = renderer.create(
    <HeaderLayout children={<div>this is an element</div>} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
