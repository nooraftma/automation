const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('download');
})

test('download',async({page})=>{
    const downloadPromise= page.waitForEvent("download");
    await page.getByText('loctor.png').click();
    const download=await downloadPromise;
    await page.screenshot({path:"screenshot/dwld.png"});
    await expect(download.suggestedFilename()).toBe('loctor.png');
})    





