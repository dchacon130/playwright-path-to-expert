import { expect, test } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test.describe('Locators en Playwright', () => {
    
    test('Login en Orange HRM live', async ( {page} )=> {
        
        const btnLogin = page.getByRole('button', { name: 'Login' });
        const dashboard = page.getByRole('heading', { name: 'Dashboard'});
        const search = page.getByPlaceholder('Search');
        const admin = page.getByText('Admin');
        const lblSystemUsers = page.getByRole('heading', { name: 'System Users'});

        console.log('Login en Orange HRM live...');
        await page.locator('input[name="username"]').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.screenshot({ path: 'screenshots/despues-login.png', fullPage: true });
        await btnLogin.click();
        
        
        //assertion login
        await expect(dashboard).toBeVisible();
        await expect(dashboard).toHaveText('Dashboard');
        await expect(btnLogin).not.toBeVisible();
        
        try{
            await search.waitFor({ state: 'visible', timeout: 10000 });
            
            const searchExist = await search.count() > 0;
            const isVisible = await search.isVisible();
            const isEnabled = await search.isEnabled();
            
            if (searchExist && isVisible && isEnabled){
                await search.fill('Admin');
                await admin.click();
                console.log('Campo de busqueda entrando a Admin');
                
                //assertion Admin
                await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
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

