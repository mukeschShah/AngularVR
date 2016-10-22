import { AngularVRPage } from './app.po';

describe('angular-vr App', function() {
  let page: AngularVRPage;

  beforeEach(() => {
    page = new AngularVRPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-vr works!');
  });
});
