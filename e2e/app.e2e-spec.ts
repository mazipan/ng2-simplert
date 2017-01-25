import { NgSimplertPage } from './app.po';

describe('ng-simplert App', function() {
  let page: NgSimplertPage;

  beforeEach(() => {
    page = new NgSimplertPage();
    page.navigateTo();
  });

  it('Read button text', () => {
    expect(
      page.getButtonByClassName('open--info')
    ).toEqual('Open Information Alert');
  });
});
