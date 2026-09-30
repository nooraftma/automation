const {test,expect}=require("@playwright/test");
const { Loginpage} = require("./pages/Loginpage");



// test.beforeEach(async({page})=>{
//     await page.goto("https://www.saucedemo.com");
//     await page.getByPlaceholder('Username').fill("standard_user");
//      await page.waitForTimeout(3000);
//       await page.getByPlaceholder('password').fill("secret_sauce");
//       await page.locator('#login-button').click();
// })
// test("check for product",async({page})=>{
//     console.log("running.......");
//     await expect(page.locator(".title")).toHaveText("Products");
//     console.log("success...")
// })
// test("to check item added to cart",async({page})=>{
//     console.log("started...");
//     await page.getByRole("button",{name:"Add to cart"}).first().click();
//     console.log("button is working....");

//     await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
//     await page.screenshot({path:"itemsreenshot/item1.png"});
//     console.log("item added successfully...");
// })
// test("to remove item from cart",async({page})=>{
//     console.log("started to click");
//     const count=await page.getByRole("button",{name:"Add to cart"}).count();
//     for(let i=0;i<count;i++){
//     await page.getByRole("button",{name:"Add to cart"}).nth(i).click();
    
//     }
//     await page.waitForTimeout(10000);
//     console.log("clicked..");
//     await expect(page.locator(".shopping_cart_badge")).toHaveText("1");
//     console.log("item added succes");
//     await page.getByRole("button",{name:"Remove"}).first().click();
//     await page.screenshot({path:"itemsreenshot/remove.png"});
//     console.log("clicked to remove item");
//     await expect(page.locator(".shopping_cart_badge")).not.toBeVisible();
//     console.log("removed successfully");
    
// })
// test("to add all items",async({page})=>{
//     const addButtons=page.getByRole("button", { name: "Add to cart" });
//     const productCount=await addButtons.count();
//     console.log("Total products",productCount);
//     for(let i=0;i<productCount;i++){
//         await addButtons.first().click();
//     }
//     await expect(page.locator(".shopping_cart_badge")).toHaveText(String(productCount));
//      console.log("cart badge show:",productCount);
// })
// test("to remove from cart",async({page})=>{
//      await page.getByRole("button",{name:"Add to cart"}).first().click();
//      await page.screenshot({path:"itemsreenshot/added to cart.png"})
//      console.log("button clickked to add item")
//     await page.locator(".shopping_cart_link").click();
//     console.log("button clicked to check cart");
//     await page.getByRole("button",{name:"Remove"}).click();
//      await page.screenshot({path:"itemsreenshot/removed from cart.png"})
//     console.log("remove button clicked");
//     await expect(page.locator("//*[@id='shopping_cart_container']/a/span")).not.toBeVisible();
// })
// test("to check checkout",async({page})=>{
//      await page.getByRole("button",{name:"Add to cart"}).first().click();
    
//      console.log("button clickked to add item")
//     await page.locator(".shopping_cart_link").click();
//     console.log("button clicked to check cart");
//     await page.getByRole("button",{name:"Checkout"}).click();
//     await page.getByPlaceholder("First Name").fill("noora");
//     await page.getByPlaceholder("Last Name").fill("fathima");
//     await page.getByPlaceholder("Zip/Postal Code").fill("897860");
//     await page.getByRole("button",{name:"Continue"}).click();
//     await expect(page.getByText("Price Total")).toBeVisible();
//      await page.getByRole("button",{name:"Finish"}).click();
//      await page.getByRole("button",{name:"Back Home"}).click();
//      await expect(page.getByTitle(/Swag Labs/));
//           await page.screenshot({path:"itemsreenshot/back to home.png"})

// })
// test("to check hamberger",async({page})=>{
//     await page.getByRole("button",{name:"Open Menu"}).click();
//     await page.locator("#logout_sidebar_link").click();
//       await page.screenshot({path:"itemsreenshot/logout.png"});
// })


test("to test drop down",async({page})=>{
    const loginpage=new Loginpage(page);
    await loginpage.goto();
    await loginpage.start("standard_user","secret_sauce");
    await page.selectOption('.product_sort_container','lohi');
    await expect(page.locator('.product_sort_container')).toHaveValue("lohi");
})

















