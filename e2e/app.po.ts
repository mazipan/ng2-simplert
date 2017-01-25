import { browser, element, by } from 'protractor';

export class NgSimplertPage {
  navigateTo() {
    return browser.get('/');
  }

  getButtonByClassName(className: string) {

    return element(by.css(className)).getText();
  }
}
