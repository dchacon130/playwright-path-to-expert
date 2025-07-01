const { test, expect } = require("./fixtures/fixtures");

test('La pagina de login se muestra correctamente usando una fixture', async ({ loginPage }) => {
    await expect(loginPage.inputUserName).toBeVisible();
    await expect(loginPage.inputPassword).toBeVisible();
    await expect(loginPage.btnLogin).toBeVisible(); // Agregar más validaciones
});

test('El login funciona a traves de la fixture', async ({ loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL(/inventory.html/);
});