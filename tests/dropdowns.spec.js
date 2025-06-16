import { expect, test } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    console.log('Abriendo the internet herokuapp');
});

test.describe('selecciona una opción de un dropdown', () => {
    test('Selecciona un dropdown', async ({page}) => {
        const dropdown = page.locator('#dropdown');
        await dropdown.selectOption('2');

        await expect(dropdown).toHaveValue('2');
        console.log('Opción 2 seleccionada por valor');
        
        await dropdown.selectOption({ label: 'Option 1' });
        await expect(dropdown).toHaveValue('1');
        console.log('Opción 1 seleccionada por valor');
    });
});