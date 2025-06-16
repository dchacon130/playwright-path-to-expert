import { test, expect } from '@playwright/test';

test.beforeEach( async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    console.log('Open checkboxes');
});

test.describe('Marca y desmarca varios checkboxes',  () => {
    test('Marca todos los checkbox 1 y 2 ', async ({page}) => {
        const checkbox1 = page.locator('input[type="checkbox"]').first();
        const checkbox2 = page.locator('input[type="checkbox"]').last(); 

        await checkbox1.check();
        await checkbox2.uncheck();
        await expect(checkbox1).toBeChecked();
        await expect(checkbox2).not.toBeChecked();
    });
});