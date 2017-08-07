import { ChangeWebPage } from './app.po';

describe('change-web App', function() {
  let page: ChangeWebPage;

  beforeEach(() => {
    page = new ChangeWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
