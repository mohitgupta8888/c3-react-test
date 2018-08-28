import React from "react";
import { shallow } from "enzyme";
import UserCard from "./UserCard";

const userInfo = {
  id: 1,
  first_name: "George",
  last_name: "Bluth",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
};

describe("UserCard", () => {
  let component;
  let onDelete;
  beforeEach(() => {
    onDelete = jest.fn();
    component = shallow(<UserCard {...userInfo} onDelete={onDelete} />);
  });

  it("renders a img", () => {
    const userAvatar = component.find("img");
    expect(userAvatar).toBeDefined();
    expect(component.find('img').filterWhere((item) => {
      return item.prop('src') === "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg";
    }).length).toBe(1);
  });

  it("renders user display name", () => {
    const userName = component.find("h5");
    expect(userName).toBeDefined();
    expect(userName.text()).toBe("George Bluth");
  });

  it("renders delete link", () => {
    const deleteLink = component.find("a");
    expect(deleteLink).toBeDefined();
  });

  it("test delete link text", () => {
    const deleteLink = component.find("a");
    expect(deleteLink.text()).toBe("Delete");
  });

  it("test delete link click", () => {
    const deleteLink = component.find("button");
    deleteLink.simulate("click");
    expect(onDelete).toBeCalled();
  });

  it("test delete click argument", () => {
    const deleteLink = component.find("a");
    deleteLink.simulate("click");
    expect(onDelete.mock.calls[0][0]).toBe(1);
  });
  
});
