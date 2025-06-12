import { chromium, test } from '@playwright/test';
import { afterEach, beforeEach } from 'node:test';

test.beforeEach(async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    console.log('Soy before each de Elements');
});

test.describe('Locators en Playwright', () => {
    
    test('Login en Orange HRM live', async ( {page} )=> {
        console.log('Login en Orange HRM live...');
        await page.locator('input[name="username"]').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();
    });
    
});

test.afterEach(async ({page}) => {
    await page.close();
    console.log("Soy before each de Elements");
});

