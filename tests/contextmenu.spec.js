const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('context_menu');

})
test("context menu testing",async({page})=>{
    page.on('dialog',async(dialog)=>{
        console.log('alert message',dialog.message());
        await dialog.accept();
    })
    await page.locator('#hot-spot').click({button:"right"});
})