const {test,expect}=require('@playwright/test');
// const { Herologin } = require('./Herologin');
// test.beforeEach(async({page})=>{
//     const herologin=new Herologin(page);
//     await herologin.goto('nested_frames');
// })
// test('nested frame',async({page})=>{
//     const middleFrame=page.frameLocator('frame[name="frame-middle"]');
//     const text=await middleFrame.locator('#content').textContent();
//     console.log(text);
// })
test('iframe of krishisara',async({page})=>{
    await page.goto('https://dev.krishisara.com');
    await page.locator('#login').fill('shirassharaf76@gmail.com');
    await page.locator('#password').fill('Agrocops@123');
    await page.locator('#loginBtn').click();
      await page.waitForLoadState('networkidle');
      await page.getByRole('button',{name:'Skip for now — remind me later'}).click();
       await page.waitForLoadState('networkidle');
    await page.goto('https://dev.krishisara.com/farmer/news-page');
    //   await page.waitForLoadState('networkidle');
await page.getByRole('button', { name: 'Mathrubhumi' }).click();
  await page.screenshot({path:"screenshot/mathrubhumi.png"});
}) 