import { browser, element, by } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get("");
  }

  getHeaderText() {
    return element(by.css("h3")).getText();
  }
}
