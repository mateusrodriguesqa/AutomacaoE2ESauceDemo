const { baseURL, selectors } = require('../environment/config');

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(selectors.login.username);
    this.passwordInput = page.locator(selectors.login.password);
    this.loginButton = page.locator(selectors.login.loginButton);
  }

  async goto() {
    await this.page.goto(baseURL);
    await this.usernameInput.waitFor();
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async assertLoginSuccess() {
    await this.page.waitForURL('**/inventory.html');
    await this.page.locator(selectors.produtos.title).waitFor();
  }
};
