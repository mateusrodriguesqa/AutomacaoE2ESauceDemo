module.exports = {
  baseURL: 'https://www.saucedemo.com/',

  users: {
    valid: {
      username: 'standard_user',
      password: 'secret_sauce',
    },
    lockedOut: {
      username: 'locked_out_user',
      password: 'secret_sauce',
    },
  },

  selectors: {
    login: {
      username: '[data-test="username"]',
      password: '[data-test="password"]',
      loginButton: '[data-test="login-button"]',
    },
    produtos: {
      title: '.title',
      addBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
      addBikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
      cartButton: '.shopping_cart_link',
    },
    carrinho: {
      items: '.cart_item',
      checkoutButton: '[data-test="checkout"]',
    },
    checkout: {
      firstName: '[data-test="firstName"]',
      lastName: '[data-test="lastName"]',
      postalCode: '[data-test="postalCode"]',
      continueButton: '[data-test="continue"]',
      finishButton: '[data-test="finish"]',
      confirmation: '.complete-header',
    },
  },
};
