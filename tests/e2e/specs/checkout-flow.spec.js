const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const { ProdutosPage } = require('../pages/produtos.page');
const { CartPage } = require('../pages/cart.page');
const { CheckoutPage } = require('../pages/checkout.page');
const { users } = require('../environment/config');

test('E2E - fluxo de compra completo no SauceDemo', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const produtosPage = new ProdutosPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Login
  await loginPage.goto();
  await loginPage.login(users.valid.username, users.valid.password);
  await loginPage.assertLoginSuccess();

  // Produtos
  await produtosPage.addProductsToCart();
  await produtosPage.goToCart();

  // Carrinho
  await cartPage.verifyItemsInCart(2);
  await cartPage.proceedToCheckout();

  // Checkout
  await checkoutPage.fillCheckoutInformation('Mateus', 'Rodrigues', '12345');
  await checkoutPage.finishOrder();
  await checkoutPage.validateOrderConfirmation();
});
