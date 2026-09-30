const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");

test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
     await herologin.goto("exit_intent");
}) 
test('exit mouse',async({page})=>{
    await page.mouse.move(100,100);
    await page.mouse.move(100,-10);
    await expect(page.locator('.modal')).toBeVisible();

})