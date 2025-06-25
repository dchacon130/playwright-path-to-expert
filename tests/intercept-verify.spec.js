import { test, expect } from '@playwright/test';

test('verifica que se llama la API la cargar la pagina', async ({page}) => {
    const requestPromise = page.waitForRequest(request => {
        return request.url().includes('https://jsonplaceholder.typicode.com/users/1') && request.method() == 'GET';
    });

    await page.goto('https://jsonplaceholder.typicode.com/users/1');
    //await page.getByRole('button', { name: 'Cargar Post' }).click();

    const request = await requestPromise;
    expect(request).toBeDefined();
    console.log(`Solicitud a ${request.url()} interceptada y verificada exitosamente!`);
});