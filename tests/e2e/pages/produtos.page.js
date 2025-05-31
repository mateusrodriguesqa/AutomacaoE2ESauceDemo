const { selectors } = require('../environment/config');

exports.ProdutosPage = class ProdutosPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator(selectors.produtos.title);
    this.addBackpack = page.locator(selectors.produtos.addBackpack);
    this.addBikeLight = page.locator(selectors.produtos.addBikeLight);
    this.cartButton = page.locator(selectors.produtos.cartButton);
  }

  async addProductsToCart() {
    await this.title.waitFor();
    await this.addBackpack.click();
    await this.addBikeLight.click();
  }

  async goToCart() {
    await this.cartButton.click();
  }
};
