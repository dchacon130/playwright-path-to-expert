import { test } from '@playwright/test';

test.describe('Entrar a Google', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.google.com/');
    });
});