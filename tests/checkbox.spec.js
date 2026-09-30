const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');

test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('checkboxes');

})
test("CHECK BOX TESTING",async({page})=>{
const checkbox1=page.locator('#checkboxes input[type="checkbox"]').nth(0);
const checkbox2=page.locator('#checkboxes input[type="checkbox"]').nth(1);
await checkbox1.uncheck();

await expect(checkbox1).not.toBeChecked();
await checkbox2.check();
await expect(checkbox2).toBeChecked();
 await page.screenshot({path:"itemscreenshot/notcheck1.png"});
})