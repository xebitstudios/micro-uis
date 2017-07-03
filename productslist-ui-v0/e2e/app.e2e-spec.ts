import { ProductslistUiV0Page } from './app.po';

describe('productslist-ui-v0 App', () => {
  let page: ProductslistUiV0Page;

  beforeEach(() => {
    page = new ProductslistUiV0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
