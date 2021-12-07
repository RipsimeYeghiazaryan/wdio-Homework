const Page = require('./page');

class PastebinPage extends Page {
    get newPasteForm()  {
        return $('#postform-text');
    };
    get minBar() {
        return $('#select2-postform-expiration-container');
    };
    get min() {
        return ($('.//ul[@id="select2-postform-expiration-results"]').$$('li')[2]);
    };
    get scroll() {
        const el = $('.post-form__left');
        el.scrollIntoView({block: "center"});
    };
    get pasteNameTitle() {
        return $('#postform-name');
    };
    get syntaxHighlighting() {
        return $('#select2-postform-format-container');
    };
    get bashInp() {
        return $('[class=\"select2-search__field\"]');
    };
    get bashBtnText() {
       return $('[id="select2-postform-format-container"]');
    };
    get secondParagraph() {return $('[class="source"]')};

}


module.exports = new PastebinPage();
