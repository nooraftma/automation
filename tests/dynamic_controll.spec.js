const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");

test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
      herologin.goto("dynamic_controls");
}) 
// test("dynamic controll",async({page})=>{
//     await page.getByRole("button",{name:'Remove'}).click();
//     await expect(page.locator('#checkbox')).toBeVisible();
// })


test('enable',async({page})=>{
    // await expect(page.locator('input[type="text"]')).toBeDisabled();
    await page.getByRole("button",{name:'Enable'}).click();
    await expect(page.locator('input[type="text"]')).toBeEnabled();
    await page.locator(('input[type="text"]')).fill("noora");
    await expect(page.locator(('input[type="text"]'))).toHaveValue('noora');
})

