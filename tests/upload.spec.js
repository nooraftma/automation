const {test,expect}=require('@playwright/test');
const { Herologin } = require('./Herologin');
const fs = require('fs');
const path=require('path');
const pdf=require('pdfkit');


test.beforeEach(async({page})=>{
    const herologin=new Herologin(page);
    await herologin.goto('upload');

})
test('upload',async({page})=>{
   
    await page.locator('#file-upload').setInputFiles('C:/Users/loq/Downloads/Screenshot 2026-08-25 144145.png');
    await page.getByRole('button',{name:'Upload'}).click();
    await expect(page.locator('#uploaded-files')).toHaveText('Screenshot 2026-08-25 144145.png');

})
test('test upload',async({page})=>{
 const filePath=path.join(__dirname,'noora.pdf');
 const doc=new pdf();
 doc.pipe(fs.createWriteStream(filePath));
 doc.text('this is a pdf file');
 doc.end();
 await new Promise((resolve)=>setTimeout(resolve,500));
 await page.locator('#file-upload').setInputFiles(filePath);
})
test('drag',async({page})=>{
    // await page.locator('#drag-drop-upload').setInputFiles("C:/Users/loq/Downloads/Krishiyidam.pdf");
    // await expect(page.locator('#drag-drop-upload')).toBeVisible();
    const filetext=path.join(__dirname,'shiras.txt');
    fs.writeFileSync(filetext,'hello shiras,....wat happen');
    await page.locator('#drag-drop-upload').setInputFiles(filetext);
    

})   