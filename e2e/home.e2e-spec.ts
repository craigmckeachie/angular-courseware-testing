import { browser, element, by } from "protractor";

describe("Home (default)", function() {
  let expectedHeader = "Home";

  beforeEach(function() {
    browser.get("");
  });

  it("should display: " + expectedHeader, function() {
    expect(element(by.css("h3")).getText()).toEqual(expectedHeader);
  });
});

import { HomePage } from "./home.po";
describe("Home (default) with Page Object", function() {
  let page: HomePage;
  let expectedHeader = "Home";

  beforeEach(function() {
    page = new HomePage();
    page.navigateTo();
  });

  it("should display: " + expectedHeader, function() {
    // browser.pause();
    expect(page.getHeaderText()).toEqual(expectedHeader);
  });
});
