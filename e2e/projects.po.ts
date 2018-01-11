import { ElementArrayFinder } from "protractor/built/element";
import { element, by, browser, ElementFinder } from "protractor";

export class ProjectsPage {
  actionsButton: ElementFinder = element(by.css(".dropdown-toggle"));
  editButton: ElementFinder = element(by.css(".edit-action"));
  projectForm: ElementFinder = element(by.tagName("form"));
  projectNameInput: ElementFinder = element(by.id("projectName"));
  saveButton: ElementFinder = element(by.css(".btn-info"));
  projectNameHeaders: ElementArrayFinder = element.all(by.css("h4"));
  firstProjectHeader: ElementFinder = this.projectNameHeaders.first();

  navigateTo() {
    return browser.get("/projects");
  }

  updateName(name: string) {
    let input = this.projectNameInput;
    input.clear().then(() => {
      input.sendKeys(name);
    });
  }
}
