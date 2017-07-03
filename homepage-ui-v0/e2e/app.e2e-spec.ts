import { HomepageUiV0Page } from './app.po';

describe('homepage-ui-v0 App', () => {
  let page: HomepageUiV0Page;

  beforeEach(() => {
    page = new HomepageUiV0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
