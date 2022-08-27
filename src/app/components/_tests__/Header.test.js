import React from "react";
import renderer from "react-test-renderer";
import Header from "../Header";

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with  props", () => {
  const component = renderer.create(
    <Header
      subt1={"Umwelt und Preisvergleich zwischen VVS und Deinem Auto"}
      title={"Umweltrechner"}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
