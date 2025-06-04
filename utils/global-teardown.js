import fs from 'fs';

async function globalTeardown(config){
    console.log('A limpiar! Ejecutando Global Teardown...');
    if (fs.existsSync('setup-listo.txt')) {
        fs.unlinkSync('setup-listo.txt');
        console.log('Archivo setup-listo.txt borrado!');
    }
}

export default globalTeardown;