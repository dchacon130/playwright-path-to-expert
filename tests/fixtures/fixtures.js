const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

exports.test = base.text.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();

        await use(LoginPage);
    }
});

exports.expect = base.expect;