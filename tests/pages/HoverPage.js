import { expect } from "@playwright/test";

export class HoverPage {

    /**
     * @param {import('@playwright/test').page} page
     */
    constructor(page){
        this.page = page;
        this.profileFigures = page.locator('.figure');
        this.link = page.getByRole('Link', { name: 'View profile'})
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/hovers');
    }

    /**
     * Obtiene la cantidad de perfiles de usuario en la página.
     * @returns {Promise<number>}
     */
    async getProfilesCount(){
        return await this.profileFigures.count();
    }

    /**
     * Simula el hover sobre un perfil específico por un índice.
     * @param {number} index - El indie del perfil (empezando en 0)
     */
    async hoverOverProfile(index){
        await this.profileFigures.nth(index).hover();
    }

    /**
     * Verifica que el enlace "View profile" de un perfil específico es visible.
     * @param {number} index - El indice del perfil (empezando en 0)
     */
    async assertProfileLinkIsVisible(index){
        const profileLink = this.profileFigures.nth(index).getByRole('link', { name: 'View profile' });
        await expect(profileLink).toBeVisible();
    }
}