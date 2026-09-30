const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('dynamic_content?with_content=static');

})
test(" dynamic content",async({page})=>{
    const rows=page.locator('.large-2.columns');
    await expect(rows).toHaveCount(3);
})
test("content change on refresh",async({page})=>{
    const textdiv=page.locator('#content .row .large-10.columns');
    const textbefore=await textdiv.first().textContent();
    //to refresh the page
    await page.reload();
    const textafter=await textdiv.first().textContent();
    expect (textbefore).not.toBe(textafter);

})