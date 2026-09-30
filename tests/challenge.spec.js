const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('challenging_dom');

})
test("dom", async ({ page }) => {

    const links = page.locator('#content .large-2 a');

    await expect(links.first()).toBeVisible();

    console.log("link working");

    await links.first().click();
});
