import React from "react";
import renderer from "react-test-renderer";
import SuggestionCard from "../SuggestionCard";

const locations = [
  {
    "#text": "Stadt",
    anyType: "poi",
    anyTypeSort: "4",
    buildingName: "",
    buildingNumber: "",
    id: "2002734",
    listIndex: "0",
    locality: "Filderstadt",
    mainLocality: "",
    mapName: "EPSG:4326",
    matchQuality: "1000",
    nameKey: "",
    objectName: "Stadt",
    omc: "8116077",
    placeID: "-1",
    postCode: "",
    selected: "1",
    stateless:
      "poiID:2002734:8116077:-1:Stadt:Filderstadt:Stadt:ANY:POI:3514784:769226:NBWT:VVS",
    streetName: "",
    value: "0:1",
    x: "9.19964",
    y: "48.65440",
  },
];

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(<SuggestionCard />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with props", () => {
  const component = renderer.create(
    <SuggestionCard
      handleSuggestion={() => {}}
      handlebothLocation={() => {}}
      locations={[]}
      display={""}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with props data", () => {
  const component = renderer.create(
    <SuggestionCard
      handleSuggestion={() => {}}
      handlebothLocation={() => {}}
      locations={[locations]}
      display={"none"}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
