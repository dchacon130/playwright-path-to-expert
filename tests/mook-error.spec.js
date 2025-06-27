import { test, expect } from '@playwright/test';
import path from 'path';

test('Muestra un mensaje de error cuando falla la API', async ({page}) => {
    await page.route('https://api.example.com/user/1', async route => {
        console.log('Interceptando y mockeando la respuesta de la API con un error 500.');

        await route.fulfill({
            status: 500,
            contentType: 'application/json',
            body: JSON.stringify({ message: 'Internal server error'}),
        });
    });

    const filePath = path.join(process.cwd(), 'app.html');
    await page.goto(`file://${filePath}`);

    
});