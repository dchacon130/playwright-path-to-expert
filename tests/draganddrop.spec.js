import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    console.log('Abriendo drag and drop');
});

test.describe('Simula un escenario de, drag and drop', () => {
    test('Drag and Drop', async ({page}) => {
        const divOrigen = page.locator('#column-a');
        const divDestino = page.locator('#column-b');

        await divOrigen.dragTo(divDestino);
        console.log('objeto A arrastrado a B');

        await expect(divOrigen.locator('header')).toHaveText('B');
        await expect(divDestino.locator('header')).toHaveText('A');
    });
});