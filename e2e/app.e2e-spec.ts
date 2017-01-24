import { NgSimplertPage } from './app.po';

describe('ng-simplert App', function() {
  let page: NgSimplertPage;

  beforeEach(() => {
    page = new NgSimplertPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
