class Herologin{
    constructor(page){
        this.page=page;
    }
    async goto(url){
        await this.page.goto(`https://the-internet.herokuapp.com/${url}`);
    }
}
module.exports={Herologin};