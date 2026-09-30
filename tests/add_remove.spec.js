const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");

test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
      herologin.goto("add_remove_elements/");
}) 


test("add",async({page})=>{

    await page.getByRole("button",{name:"Add Element"}).click();
    await expect(page.getByRole("button",{name:"Delete"})).toBeVisible();
    
})


test("remove",async({page})=>{
       await page.getByRole("button",{name:"Add Element"}).click();
    await page.getByRole("button",{name:"Delete"}).click();
  await expect(page.getByRole("button",{name:"Delete"})).not.toBeVisible();
})