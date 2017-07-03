import { browser, by, element } from 'protractor';

export class ProductslistUiV0Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
