import { test, expect } from '@playwright/test';

test('El usuario puede ver la pagina de inventario', async ({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.locator('.inventory_list')).toBeVisible();
    await expect(page.getByText('Products')).toBeVisible();
});