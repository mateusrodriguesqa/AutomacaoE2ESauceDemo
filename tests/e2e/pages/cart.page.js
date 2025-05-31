const { expect } = require('@playwright/test');
const { selectors } = require('../environment/config');

exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator(selectors.carrinho.items);
    this.checkoutButton = page.locator(selectors.carrinho.checkoutButton);
  }

  async verifyItemsInCart(expectedCount) {
    await this.cartItems.first().waitFor();
    await expect(this.cartItems).toHaveCount(expectedCount);
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
};
