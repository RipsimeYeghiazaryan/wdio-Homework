const pastebin = require('../pageobjects/pastebin.page');

describe('Pastebin page', async () => {

    it('Should open the page and verify', async () => {
        await pastebin.open('');
        await  expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
    });

    it('Should type text the in New Paste form', async () => {
        await pastebin.newPasteForm.addValue(
            'git config  --global user.name   "New Sheriff in Town" \n' +
            'git reset $ ( git commit-tree HEAD ^ { tree }  -m  "Legacy code" ) \n' +
            'git push origin master --force');
        await pastebin.scroll;
    });

    it('should select Bash from Syntax Highlight', async () => {
        await pastebin.syntaxHighligting.click();
        await pastebin.bash.click();
    });

    it('should click on Paste Expiration and choose 10 minutes', async () =>{
        await pastebin.minBar.click();
        await pastebin.scroll;
        await browser.keys('ArrowDown')
        await browser.keys('ArrowDown')
        await browser.keys('Enter')
    });

    it('should type "how to gain dominance among developers" in the Paste Name/Title ', async () => {
        await pastebin.pasteNameTitle.addValue('how to gain dominance among developers');
        await browser.keys('Enter');
    });

    it('should verify the title of browser', async () => {
         expect(browser.getTitle()).toHaveTextContaining(pastebin.pasteNameTitle.value);
    });

    it('should check underlined for bash', async () => {
        await expect(pastebin.bashBtnText).toHaveTextContaining('Bash');
    });

    it('should Check that the code matches the one entered in paragraph 2', async () => {
        expect(pastebin.secondParagraph).toHaveTextContaining('git reset $ ( git commit-tree HEAD ^ { tree }  -m  "Legacy code" )');
    });

});
