const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('dropdown');
})
test("drop down",async({page})=>{
    //by using id and value
    // await page.selectOption('#dropdown','1');
    // await expect(page.locator('#dropdown')).toHaveValue('1');

    //by id and label inside option
    await page.selectOption('#dropdown',{label:'Option 1'});
    await expect(page.locator('#dropdown')).toHaveValue('1');
})