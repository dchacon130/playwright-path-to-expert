const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

exports.test = base.test.extend({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await use(loginPage);
    }
});

exports.expect = base.expect;