const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");


test.use({              
    httpCredentials:{
        username:'admin',
        password:'admin'
    }
})
test.beforeEach(async ({page})=>{
    const herologin=new Herologin(page);
   await herologin.goto("basic_auth");
    })
test("auth",async({page})=>{
        await expect(page.getByText('Congratulations')).toBeVisible();
    })





    