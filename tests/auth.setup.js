import { test as setup, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

const authFile = 'playwright/.auth/auth.json';

setup('Autenticar usuario', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page.getByText('Products')).toBeVisible();

    await page.context().storageState({ path: authFile });
    console.log(`Etado de sesión guardado en ${authFile}`);
});