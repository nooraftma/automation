const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");

test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
     await herologin.goto("hovers");
}) 
test('hover',async({page})=>{
    const image=page.locator('.figure');
    await image.hover();
})