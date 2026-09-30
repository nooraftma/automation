const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('horizontal_slider');
})
test('horizontal slider',async({page})=>{
   const slide=page.locator('input[type="range"]');
   await slide.focus();
   await slide.press('ArrowRight');
   await expect(slide).toHaveValue('0.5');
await slide.press('ArrowRight');
   await expect(slide).toHaveValue('1');
   await slide.press('ArrowLeft');
   await expect(slide).toHaveValue('0.5');
})