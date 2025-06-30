import { test, expect } from "./fixtures/fixtures";

test('La pagina de login se muestra correctamente usando una fixture', async ({ loginPage }) => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
});

test('El login funciona a traves de la fixture', async ({ loginPage, page}) => {
    await loginPage.LoginPage('standar_user', 'secret_sauce');
    
    await expect(page).toHaveURL(/inventory.html/);
});