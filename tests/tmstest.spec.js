const { test, expect } = require("@playwright/test");
// test("TMS LOGIN TEST",async ({page})=>{
//     await page.goto("http://62.72.12.218:9003/login/cisco/");
//     await page.waitForTimeout(3000);
//     await page.getByPlaceholder("Email address").fill("admin@cisco.com");
//     await page.getByPlaceholder("Password").fill("cisco@1234");
//     await page.waitForTimeout(3000);
//     await page.getByRole("button",{name:"Sign In"}).click();
//     await page.waitForTimeout(3000);
//     await expect(page).toHaveURL(/\/dashboard\/hrms\/$/);
// })
// test("TMS INVALID PASSWORD",async({page})=>{
//     await page.goto("http://62.72.12.218:9003/login/cisco/");
//     await page.waitForTimeout(3000);
//     await page.getByPlaceholder("Email address").fill("admin@cisco.com");
//     await page.getByPlaceholder("Password").fill("cisco@234");
//     await page.waitForTimeout(3000);
//     await page.getByRole("button",{name:"Sign In"}).click();
//     await page.waitForTimeout(3000);
//     await expect(page.getByText('Invalid email')).toBeVisible();
// })
// const wrongusername = [
//   "abcd@gmail.com",
//   "hgftd@gmail.com",
//   "noora@gmail.com",
//   "sumiya",
// ];
// const wrongpasswords = ["noo@123", "vuu@123", "jkk@345", "hjhj@900"];
// for (const username of wrongusername) {
//   for (const password of wrongpasswords) {
//     test(`login fail with -${username}/${password}`, async ({ page }) => {
//       await page.goto("http://62.72.12.218:9003/login/cisco/");
//       await page.waitForTimeout(3000);
//       await page.getByPlaceholder("Email address").fill(username);
//       await page.getByPlaceholder("Password").fill(password);
//       await page.waitForTimeout(3000);
//       await page.getByRole("button", { name: "Sign In" }).click();
//       await page.waitForTimeout(3000);
//     });
//   }
// }
const wrongcredentials = [
  { email: "noo@gmail.com", password: "noo@123" },
  { email: "moo@gmail.com", password: "moo@123" },
  { email: "koo@gmail.com", password: "koo@123" },
{email:"joo@gmail.com",password:"hjj@88"}];
for(const wrongcredential of wrongcredentials ){
   test(`login fail with -${wrongcredential.email}/${wrongcredential.password}`,async({page})=>{
      await page.goto("http://62.72.12.218:9003/login/cisco/");
      await page.getByPlaceholder("Email address").fill(wrongcredential.email);
      await page.getByPlaceholder("Password").fill(wrongcredential.password);
      await page.waitForTimeout(3000);
      await page.getByRole("button", { name: "Sign In" }).click();
      await page.waitForTimeout(3000);
      await page.screenshot({path:`sreenshots/${wrongcredential.email}.png`});
      await expect(page.locator('.error-box')).toBeVisible();
   })
}
