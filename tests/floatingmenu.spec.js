const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('floating_menu');
})
test("home",async({page})=>{
    await page.getByRole('link',{name:'About'}).click();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/floating_menu#about');
})
test('to test visibility while scrolling',async({page})=>{
     const menu=page.locator('#menu');
     await expect(menu).toBeVisible();
     await page.evaluate(()=>{window.scrollTo(0,document.body.scrollHeight)});
     await expect(menu).toBeVisible();

})