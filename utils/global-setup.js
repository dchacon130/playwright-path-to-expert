import { chromium } from "@playwright/test";
import fs from 'fs';

async function globalSetup(config){
    console.log('Arrancando el Global Setup!');
    fs.writeFileSync('setup-listo.txt', 'Archivo creado!');
}

export default globalSetup;