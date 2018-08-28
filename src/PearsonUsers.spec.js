import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";

jest.mock('./services/users');

describe("PearsonUsers", () => {
  let component;

  beforeEach(() => {
    component = shallow(<PearsonUsers />);
  });

  it("renders a h1", () => {
    const h1 = component.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it("mergeUniqueItems() should merge two arrays with unique items", () => {
    const source = [{
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    }];

    const toBeAdded = [{
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    }, {
      id: 5,
      first_name: "Charles",
      last_name: "Morris",
      avatar:
        "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
    }];

    const mergedUsers = PearsonUsers.mergeUniqueItems(source, toBeAdded);
    expect(mergedUsers.length).toBe(2);
  })
});
