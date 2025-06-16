import { expect, test } from '@playwright/test';

test.beforeEach(async ({page}) => {
    const requestPromise = page.waitForRequest('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const request = await requestPromise;
    console.log('Petición interceptada: ', request.url);
    console.log('Método: ', request.method());
});

test.describe('Locators en Playwright', () => {
    
    test('Login en Orange HRM live', async ( {page} ) => {
        //waits
        const btnLogin = page.getByRole('button', { name: 'Login' });
        const dashboard = page.getByRole('heading', { name: 'Dashboard'});
        const search = page.getByPlaceholder('Search');
        const admin = page.getByText('Admin');
        const lblSystemUsers = page.getByRole('heading', { name: 'System Users'});
        const addbutton = page.getByRole('button', { name: 'Add' });

        console.log('Login en Orange HRM live...');
        await page.locator('input[name="username"]').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        const [loginResponse, dashboardResponse] = await Promise.all([
            page.waitForResponse('**/auth/validate'),
            page.waitForResponse(resposne => 
                resposne.url().includes('/dashboard') || 
                resposne.url().includes('/api/v2/dashboard')
            ),
            await btnLogin.click()
        ]);

        console.log('Login status: ', loginResponse.status());
        console.log('Dashboard loaded: ', dashboardResponse.status());
        
        
        await page.screenshot({ path: 'screenshots/despues-login.png', fullPage: true });
        //assertion login
        await expect(dashboard).toBeVisible();
        await expect(dashboard).toHaveText('Dashboard');
        await expect(btnLogin).not.toBeVisible();
        
        try{
            //waits
            await page.waitForLoadState('networkidle');
            await search.waitFor({ state: 'visible', timeout: 10000 });
            
            const searchExist = await search.count() > 0;
            const isVisible = await search.isVisible();
            const isEnabled = await search.isEnabled();
            
            if (searchExist && isVisible && isEnabled){
                await search.fill('Admin');
                await admin.click();
                
                //assertion Admin
                await expect(addbutton).toBeVisible();
                //await expect(lblSystemUsers).toHaveValue('System Users');
                await lblSystemUsers.screenshot({ path: 'screenshots/lblSystemUser.png' });
            }else {
                console.log('Campo search no disponible');
            }
        }catch(error){
            console.log('Error en el campo de busqueda Menú: ', error.message);
        }
    });
});



test.afterEach(async ({page}) => {
    await page.close();
});

