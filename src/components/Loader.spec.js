import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";


describe("Loader", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Loader />);
  });

  it("renders a div", () => {
    const loaderDiv = component.find("div");
    expect(loaderDiv).toBeDefined();
    expect(loaderDiv.hasClass("loader")).toBe(true);
  });

  
});
