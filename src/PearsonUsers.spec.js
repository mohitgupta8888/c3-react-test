import React from "react";
import { shallow, mount } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";
import userService from './services/users';

global.confirm = () => true;
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
  });

  it("validate component state", () => {
    expect(component.instance().state.users.length).toBe(3);
  });

  it("validate user cards", () => {
    expect(component.find("UserCard").length).toBe(3);
  });

  it("validate delete user from state", () => {
    const users = component.instance().state.users;
    expect(users.length).toBe(3);
    expect(users.findIndex(u => u.id === 4)).toBeGreaterThan(-1);
    component.instance().confirmDelete(4);
    expect(users.length).toBe(2);
    expect(users.findIndex(u => u.id === 4)).toBe(-1);
  });

  it("validate if api called", (done) => {
    component = mount(<PearsonUsers />);

    return userService.getUsers().then(() => {
      expect(component.instance().state.users.length).toBe(10);
      component.update();
      done();
    }).then(() => {
      expect(component.find("UserCard").length).toBe(10);
    });
  });
});
