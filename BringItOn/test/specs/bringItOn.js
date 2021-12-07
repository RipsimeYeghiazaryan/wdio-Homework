const pastebin = require('../pageobjects/pastebin.page');

describe('Pastebin page', async () => {

    it('Should open the page and verify', async () => {
        await pastebin.open('');
        expect(browser).toHaveTitle('Pastebin.com - #1 paste tool since 2002!');
    });

    it('Should type text the in New Paste form', async () => {
        await pastebin.newPasteForm.addValue(
            'git config  --global user.name   "New Sheriff in Town" \n' +
            'git reset $ ( git commit-tree HEAD ^ { tree }  -m  "Legacy code" ) \n' +
            'git push origin master --force');
        expect(pastebin.newPasteForm).toHaveTextContaining('git config  --global user.name   "New Sheriff in Town"')
    });

    it('should select Bash from Syntax Highlight', async () => {
        await pastebin.scroll;
        await pastebin.syntaxHighlighting.click();
        await pastebin.bashInp.addValue('Bash');
        await browser.keys('Enter');
        expect(pastebin.bashBtnText).toHaveTextContaining('Bash');
    });

    it('should click on Paste Expiration and choose 10 minutes', async () =>{
        await pastebin.minBar.click();
        await pastebin.scroll;
        await pastebin.min.click();
        expect(pastebin.minBar).toHaveTextContaining("10 Minutes");
    });

    it('should type "how to gain dominance among developers" in the Paste Name/Title ', async () => {
        await pastebin.pasteNameTitle.addValue('how to gain dominance among developers');
        await browser.keys('Enter');
        expect(browser.getTitle()).toHaveTextContaining(pastebin.pasteNameTitle.value);
    });

    it('should Check that the code matches the one entered in paragraph 2', async () => {
        expect(pastebin.secondParagraph).toHaveTextContaining('git reset $ ( git commit-tree HEAD ^ { tree }  -m  "Legacy code" )');
    });

});
