export class LoginPage{
    constructor (page){
        this.page = page; 
        this.inputUserName = page.locator('#user-name');
        this.inputPassword = page.locator('#password');
        this.btnLogin = page.locator('#login-button');
    }

    async goto(){ 
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password){
        await this.inputUserName.fill(username);
        await this.inputPassword.fill(password);
        await this.btnLogin.click();
    }

}