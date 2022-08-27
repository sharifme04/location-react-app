import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import SearchLocationCard from "../SearchLocationCard";

const mockStore = configureMockStore();
const store = mockStore({});

test("snapshot Form renders with empty props", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <SearchLocationCard />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with props", () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <SearchLocationCard
          values={{}}
          handleSuggestion={() => {}}
          handleChange={() => {}}
          handleLocationPoint={() => {}}
          handetripSearch={() => {}}
        />
      </MemoryRouter>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("snapshot Form renders with props data", () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <SearchLocationCard
            values={{startPoint: "stadtmitte, Berlin", endPoint: "Tegel, Berlin"  }}
            handleSuggestion={() => {}}
            handleChange={() => {}}
            handleLocationPoint={() => {}}
            handetripSearch={() => {}}
          />
        </MemoryRouter>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  
