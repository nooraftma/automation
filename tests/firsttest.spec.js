const { test, expect } = require("@playwright/test");
test("saucedemo step1", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");
  await page.waitForTimeout(3000);
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.waitForTimeout(3000);
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.waitForTimeout(3000);
//   await page.getByRole("button", { name: "Login" }).click();
  await page.locator('#login-button').click();
  await page.waitForTimeout(3000);
//   await expect(page).toHaveURL(/inventory/);
//   await expect(page).toHaveTitle(/Swag Labs/);
  await expect(page.locator('.title')).toHaveText('Products');

});

test("invalid password test",async({page})=>{
    await page.goto("https://www.saucedemo.com");
    await page.waitForTimeout(3000);
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill("123");
     await page.waitForTimeout(3000);
     await page.locator('#login-button').click();
     await page.waitForTimeout(3000);
     await expect(page.getByText('Epic sadface')).toBeVisible();
})

const wrongpasswords=["noora","noor","shi","shiras"];
for(const password of wrongpasswords){
    test (`login fail with ${password}`,async({page})=>{
        await page.goto("https://www.saucedemo.com");
    await page.waitForTimeout(3000);
    await page.locator('#user-name').fill("standard_user");
    await page.locator('#password').fill(password);
     await page.waitForTimeout(3000);
     await page.locator('#login-button').click();
     await page.waitForTimeout(3000);
     await expect(page.getByText('Epic sadface')).toBeVisible();
    })  
}
