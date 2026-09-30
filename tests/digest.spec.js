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
   await herologin.goto("digest_auth");
    
})
test("digest",async({page})=>{
    await expect(page.getByText('Congratulations')).toBeVisible();
})