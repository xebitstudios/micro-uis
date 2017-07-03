import { CartUiV0Page } from './app.po';

describe('cart-ui-v0 App', () => {
  let page: CartUiV0Page;

  beforeEach(() => {
    page = new CartUiV0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
