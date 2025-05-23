import { test, chromium, webkit, firefox } from '@playwright/test';

let browser;

test.beforeAll(async () => {
    browser = await firefox.launch({ headless: false });
    console.log('--- Navegador lanzado ---');
});

test.describe('Abrir una pagina cualquiera', () => {
    
    test.beforeEach(async ({ page }) => {
        console.log('--- Página creada ---')
    });

    test('Este seria el primer test', async ({ page }) => {
        await page.goto('https://playwright.dev/docs/intro');
    });

    test.afterEach(async ({ page }) => {
        console.log('--- Página Cerrada ---')
    });
});

test.afterAll(async () => {
    if (browser) {
        await browser.close();
        console.log('--- Navegador cerrado ---')
    }
});
