const PastebinPage = require('../pageobjects/pastebin.page');

describe('Pastebin page', async () => {

    it('should open the page and verify', async () => {
        await PastebinPage.open('');
        await  expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
    });

    it('should type the text in New Paste form', async () => {
      await PastebinPage.newPasteForm.addValue('Hello from Webdriver');
    });

    it('should click on Paste Expiration and choose 10 minutes', async () =>{
        await PastebinPage.minBar.click();
        await PastebinPage.scroll;
        await browser.keys('ArrowDown');
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
    });

    it('should type "hello web" in the Paste Name/Title ', async () => {
        await PastebinPage.pasteNameTitle.addValue('hello web');
    });

});
