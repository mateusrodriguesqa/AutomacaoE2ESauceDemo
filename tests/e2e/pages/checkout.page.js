const { expect } = require('@playwright/test');
const { selectors } = require('../environment/config');

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator(selectors.checkout.firstName);
    this.lastName = page.locator(selectors.checkout.lastName);
    this.postalCode = page.locator(selectors.checkout.postalCode);
    this.continueButton = page.locator(selectors.checkout.continueButton);
    this.finishButton = page.locator(selectors.checkout.finishButton);
    this.confirmation = page.locator(selectors.checkout.confirmation);
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.postalCode.fill(postalCode);
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async validateOrderConfirmation() {
  await expect(this.confirmation).toHaveText('Thank you for your order!');
  }
};
