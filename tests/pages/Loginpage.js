class Loginpage{
    constructor (page){
        this.page=page;
        this.username=page.getByPlaceholder("Username");
        this.password=page.getByPlaceholder("password");
        this.login=page.locator('#login-button');

    }
    async goto(){
        await this.page.goto("https://www.saucedemo.com");
    }
    async start(username,password){
         await this.username.fill(username);
         await this.password.fill(password);
         await this.login.click();

    }
}
module.exports={Loginpage}