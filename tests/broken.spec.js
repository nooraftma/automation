// const {test,expect}=require("@playwright/test");
// const { Herologin } = require("./Herologin");

// test.beforeEach(async({page})=>{
//     const herologin=new Herologin(page);
//     await herologin.goto('broken_images')
// })
    
//     test("broken",async({page})=>{

//                const imagecount=await page.locator('img').count();
//                console.log(imagecount);
//                for(let i=0;i<imagecount;i++){
//                const naturalWidth=await page.locator('img').nth(i).evaluate((img)=>img.naturalWidth);
              
//                console.log(`image size = ${naturalWidth===0 ? 'broken image':naturalWidth}` )
               
//                }

//     })

const {test,expect}=require("@playwright/test");
const { Herologin } = require("./Herologin");
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto("broken_images");
})
test("broke image testing",async({page})=>{
  const imagecount=await page.locator('img').count();
  console.log(imagecount);
  for(let i=0;i<imagecount;i++){
    const naturalWidth=await page.locator('img').nth(i).evaluate((img)=>img.naturalWidth);
    console.log(`image size=${naturalWidth==0 ? 'broken image':'naturalWidth'}`);
  }
})