import { test, expect } from '@playwright/test';
import path from 'path';


test.beforeEach(async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    console.log('Abriendo drag and drop');
});

test.describe('Sube un archivo de prueba', () => {
    test('input files', async ({page}) => {
        const rutaArchivo = path.join(process.cwd(), 'setup-listo.txt');
        const inputArchivo = page.getByRole('button', { name: 'Choose File' });
        const btnSubirArchivo = page.getByRole('button', { name: 'Upload' });

        await inputArchivo.setInputFiles(rutaArchivo);
        console.log('Archivo seleccionado');

        await btnSubirArchivo.click();

        await expect(page.getByRole('heading')).toHaveText('File Uploaded!');
        await expect(page.locator('#uploaded-files')).toContainText('setup-listo.txt');
    });
});