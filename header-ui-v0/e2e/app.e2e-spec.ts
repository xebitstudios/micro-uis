import { HeaderUiV0Page } from './app.po';

describe('header-ui-v0 App', () => {
  let page: HeaderUiV0Page;

  beforeEach(() => {
    page = new HeaderUiV0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
