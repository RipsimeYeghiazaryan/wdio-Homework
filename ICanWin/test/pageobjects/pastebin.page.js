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
        el.scrollIntoView({block: "center"})
    };
    get pasteNameTitle() {
        return $('#postform-name');
    };

};

module.exports = new PastebinPage();
