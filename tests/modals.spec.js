import { expect, test } from '@playwright/test';

test.beforeEach(async ({page}) => {
    
});

test.describe('Uso de modales y pestañas nuevas', () => {
    test('Abrir una nueva pestaña', async ( {page} ) => {
        const requestPromise = page.waitForRequest('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        const request = await requestPromise;
        console.log('Petición interceptada: ', request.url);
        console.log('Método: ', request.method());
        
        await expect(page.getByRole('heading')).toContainText('Login')

        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.locator('a[href="http://www.orangehrm.com"]').click()
        ]);

        console.log('Nueva pestaña capturada!', await newPage.title());
        await newPage.waitForLoadState();
        await expect(newPage.getByRole('heading', { name:'Our AI, Built with Purpose,'})).toHaveText('Our AI, Built with Purpose,  Powered by You, Transforming the  Future of HR');

        await newPage.close();
        console.log('Nueva pestaña cerrada.');
        await expect(page.getByRole('heading')).toHaveText('Login');
        console.log('Foco de vuelta en la página original.');
    });

    test('Simular un clic en un modal y cerrarlo', async ({page}) => {
        await page.goto('https://getbootstrap.com/docs/5.3/components/modal/#live-demo');
        
        const btnModal = page.getByRole('button', {name:'Launch demo modal'})
        await btnModal.first().click();

        const modal = page.locator('#exampleModalLive');
        await expect(modal).toBeVisible();

        await expect(modal.locator('#exampleModalLiveLabel')).toHaveText('Modal title');
        console.log('Modal abierto y verificado');

        const btnCerrar = modal.getByText('Close')
        await btnCerrar.click();

        await expect(modal).not.toBeVisible();
        console.log('Modal cerrado exitosamente.');
    });
});