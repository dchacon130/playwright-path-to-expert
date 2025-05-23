import { test, expect, chromium, webkit } from '@playwright/test';

test.describe('Estructura basica de un script de Playwright', () => {
    let browser;
    let page;
    let page1;
    let context1;
    let page2;
    let context2;

    /*test.beforeAll(async () => {
        browser = await webkit.launch({ headless: false });
        console.log('--> Navegador webkit creado');
        
        context1 = await browser.newContext();
        page1 = await context1.newPage();

        context2 = await browser.newContext();
        page2 = await context1.newPage();
        context2.storageState();
        context2.setGeolocation();
        context2.grantPermissions();

        console.log(`BrowserContext: ${browser.contexts()}`);
        console.log(`Is Connected: ${browser.isConnected()}`);
        console.log('--> Navegador creado');
    });*/

    test.beforeEach(async ({page}) => {
        //page = await browser.newPage();
        console.log('--> Pagina creada');
    });

    test('Este seria el primer test', async () => {
        
    });

    test.afterEach(async ({page}) => {
        if(page){
            await page.close();
            console.log('--> Pagina cerrada');
        }
        
    });

    /*test.afterAll(async () => {
        if (browser) {
            await browser.close();
            console.log('--> Navegador cerrado.')
        }
        else if(context1){
            context1.close();
        }
        else if(context2){
            context2.close();
        }
    });*/
});