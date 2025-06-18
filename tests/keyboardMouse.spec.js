import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    
});

test.describe('Eventos de Teclado y Ratón', () => {
    test('Evento de Ratón', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/hovers');
        console.log('Abriendo hovers');

        const figuras  = page.locator('.figure');
        const cantidadFiguras = await figuras.count();
        console.log('Se encontraron: ', cantidadFiguras);
        
        for(let i = 0; i < cantidadFiguras; i++){
            console.log('Estamos en el for', i);
            //const figura = figuras.nth(i).hover();
            await figuras.nth(i).hover();
            const nameUser = page.locator('#content');

            //await figura.hover();
            await expect(nameUser).toContainText(`name: user${i+1}`);
            console.log(`name: user${i+1}`);
        }
    });

    test('Evento del teclado', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/key_presses');
        console.log('Abriendo hovers');

        const campoBusqueda = page.locator('#target');
        const valorTeclado = page.locator('#result');

        await campoBusqueda.click();
        await page.keyboard.press('ArrowUp');
        await expect(valorTeclado).toHaveText('You entered: UP');
    });
});