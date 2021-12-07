const PastebinPage = require('../pageobjects/pastebin.page');

describe('Pastebin page', async () => {

    it('should open the page and verify', async () => {
        await PastebinPage.open('');
        expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
    });

    it('Should create New Paste with several details', async () =>{
        await PastebinPage.newPasteForm.addValue('Hello from Webdriver');
        await PastebinPage.minBar.click();
        await PastebinPage.scroll;
        await PastebinPage.min.click();
        await PastebinPage.pasteNameTitle.addValue('hello web');
        await PastebinPage.sbmBtn.click();
        expect(PastebinPage.secondParagraph).toHaveTextContaining("Hello from Webdriver");
    });

});
