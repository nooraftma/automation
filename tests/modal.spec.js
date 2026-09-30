const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('entry_ad');

})
test("entry ad",async({page})=>{

    await page.locator('.modal-footer').click();
    
     await page.getByRole('link',{name:'click here'}).click();
  await page.locator('.modal-footer').click();
})