const Page = require('./page');

class PastebinPage extends Page {
    get newPasteForm()  {
        return $('#postform-text');
    };
    get minBar() {
        return $('#select2-postform-expiration-container');
    };
    get scroll() {
        const el = $('.post-form__left');
        el.scrollIntoView({block: "center"});
    };
    get pasteNameTitle() {
        return $('#postform-name');
    };
    get syntaxHighligting() {
        return $('#select2-postform-format-container')
    };
    get bash() {
        return $("/html/body/span[2]/span/span[2]/ul/li[2]/ul/li[1]");
    };
    get bashBtnText() {
       return $('[id="select2-postform-format-container"]');
    };
    get secondParagraph() {
        return $('/html/body/div[1]/div[2]/div[1]/div[2]/div[3]/div[2]/ol/li[2]/div').getText;
    };
}


module.exports = new PastebinPage();
