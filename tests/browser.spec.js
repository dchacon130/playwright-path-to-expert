import { test, expect, chromium } from '@playwright/test';

test.describe('Estructura basica de un script de Playwright', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        console.log('Navegador lanzado y nueva pagina creada');
    });

    test.beforeEach(async ({ page }) => {

    });

    test('Este seria el primer test', async ({ page }) => {

    });

    test.afterEach(async ({ page }) => {

    });

    test.afterAll(async () => {
        if (browser) {
            await browser.close();
            console.log('Navegador cerrado.')
        }
    });
});