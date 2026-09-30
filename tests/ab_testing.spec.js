const{test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');

test("A/B TESTING-VISIBILITY",async({page})=>{
    const herologin=new Herologin(page);
   await herologin.goto("abtest");
   await expect(page.locator("h3")).toBeVisible();
})