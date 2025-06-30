import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Formulario de registro', () => {
    test('Usuario se registra con diferentes datos', async ({ page }) => {
        await page.goto('https://www.globalsqa.com/samplepagetest/');

        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email({
            firstName: randomName.split('')[0],
            provider: 'monkies.local'
        });
        const website = faker.internet.url();

        console.log(`Registrando al usuario ${randomName} con email ${randomEmail}`);

        await page.locator('input#g2599-name').fill(randomName);
        await page.locator('input#g2599-email').fill(randomEmail);
        await page.locator('input#g2599-website').fill(website);

        await expect(page.locator('input#g2599-name')).toHaveValue(randomName);
    });
});