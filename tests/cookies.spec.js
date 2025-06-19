import { test, expect } from '@playwright/test';

test('la cookie se creo correctamente', async ({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    const cookies = await page.context().cookies();
    const sessionCookie = cookies.find(cookie => cookie.name === 'session-username');
    console.log('Cookie de sesion encontrada: ', sessionCookie);

    expect(sessionCookie).toBeDefined();
    expect(sessionCookie.value).toBe('standard_user');
    expect(sessionCookie.domain).toBe('www.saucedemo.com');
});