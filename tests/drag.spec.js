const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('drag_and_drop');
})
test("drag and drop",async({page})=>{
    await page.locator("#column-a").dragTo(page.locator('#column-b'));
    await expect(page.locator("#column-a")).toHaveText('B');
        await expect(page.locator("#column-b")).toHaveText('A');
        await page.screenshot({path:'screenshot/drop.png'});
})