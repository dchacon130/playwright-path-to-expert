import { test, expect } from '@playwright/test';
import { HoverPage } from './pages/HoverPage';

test.describe('Página de Hovers con POM y un bucle', () => {
    test('Los enlaces de TODOS los perfiles se vuelven visibles al hacer hover', async ({page}) => {
        const hoverPage = new HoverPage(page);
        await hoverPage.goto();
        const profilesCount = await hoverPage.getProfilesCount();
        console.log(`Se encontraron ${profilesCount} perfiles. Iniciando validación en bucle...`);

        for (let i = 0; i < profilesCount; i++){
            console.log(`--- Validando perfil con índice ${i} ---`);
            await hoverPage.hoverOverProfile(i);
            await hoverPage.assertProfileLinkIsVisible(i);

            console.log(`Perfil ${i} validado exitosamente`);
        }
    });
});