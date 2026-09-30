const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");

// test.beforeEach(async({page})=>{
//     const herologin=new Herologin(page);
//    herologin.goto("dynamic_loading");
// }) 
// test("dynamic_loading",async({page})=>{
//     await page.getByRole('link',{name:"Example 1: Element on page that is hidden"}).click();
//     await page.getByRole('button',{name:'Start'}).click();
//     await expect(page.locator('#finish h4')).toHaveText('Hello World!');
// })
// test("dynamic",async({page})=>{
//     await page.getByRole('link',{name:"Example 2: Element rendered after the fact"}).click();
//     await page.getByRole('button',{name:'Start'}).click();
//     await expect(page.locator('#finish h4')).toHaveText('Hello World!');
// })







// const { test, expect } = require("@playwright/test");
// const { Herologin } = require("./Herologin");

// test.beforeEach(async ({ page }) => {
//     const herologin = new Herologin(page);
//     await herologin.goto("dynamic_loading");
// });

// test("dynamic_loading", async ({ page }) => {
//     await page.getByRole('link', { name: "Example 1: Element on page that is hidden" }).click();
//     await page.getByRole('button', { name: 'Start' }).click();
//     await expect(page.locator('#finish h4')).toHaveText('Hello World!');
// });

// test("dynamic", async ({ page }) => {
//     await page.getByRole('link', { name: "Example 2: Element rendered after the fact" }).click();
//     await page.getByRole('button', { name: 'Start' }).click();
//     await expect(page.locator('#finish h4')).toHaveText('Hello World!');
// });
test.beforeEach(async ({ page }) => {
    const herologin = new Herologin(page);
    await herologin.goto("dynamic_loading");
});

test("dynamic", async ({ page }) => {
    await page.getByRole('link', {
        name: "Example 2: Element rendered after the fact"
    }).click();

    await page.getByRole('button', { name: 'Start' }).click();

    await expect(page.locator('#finish')).toBeVisible();
    await expect(page.locator('#finish')).toHaveText('Hello World!');
});