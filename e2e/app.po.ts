export class AngularVRPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-vr-app h1')).getText();
  }
}
