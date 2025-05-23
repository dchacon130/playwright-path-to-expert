import { test, expect, chromium } from '@playwright/test';

test.describe('Estructura basica de un script de Playwright', () => {
    let browser;
    let page;

    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        console.log('--> Navegador creado');
    });

    test.beforeEach(async () => {
        page = await browser.newPage();
        console.log('--> Pagina creada');
    });

    test('Este seria el primer test', async () => {
        
    });

    test.afterEach(async () => {
        if(page){
            await page.close();
            console.log('--> Pagina cerrada');
        }
        
    });

    test.afterAll(async () => {
        if (browser) {
            await browser.close();
            console.log('--> Navegador cerrado.')
        }
    });
});