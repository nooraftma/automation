const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('disappearing_elements');
})
test("dissapperaing elements testing",async({page})=>{
    const menu=page.locator('ul li a');
    const menucount=await menu.count();
    console.log( "found" ,menucount);
    for(let i=0;i<menucount;i++){
 const text=await menu.nth(i).textContent();
  console.log(`item ${i+1}`,text);
    }
})