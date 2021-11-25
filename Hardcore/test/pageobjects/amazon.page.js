const Page = require('./page');

class  AmazonPage extends Page {
    get signInIcon() { return $('#nav-link-accountList')};
    get signOut() { return $('#nav-item-signout' )};
    get logInInp() { return $('#ap_email') };
    get signedText() {return $('#nav-link-accountList-nav-line-1')}
    get cntBtn() { return $('#continue') };
    get passInp() { return $('#ap_password') };
    get signIn() { return $('#signInSubmit') };
    get signInPopup() {return $('[id="nav-al-container"]')};
    get searchInput() { return $('#twotabsearchtextbox') };
    get searchBtn() { return $("#nav-search-submit-button") };
    get brand() { return $('#p_89\\/HP > span > a > div > label > i') };
    get amazonIcon() {return $('[class="a-icon a-icon-logo"]')};
    get laptop() { return $('(.//a[contains(@class, \'a-link-normal a-text-normal\')])[1]') };
    get addBtn() { return $('[id="add-to-cart-button"]') };
    get deliveryPlace() { return $('#nav-global-location-popover-link') };
    get popupOfDelivery() { return $('#a-popover-1 > div') };
    get placeSelectorBtn() { return $('[class="a-button-text a-declarative"]') };
    get delPlace() { return $('#GLUXCountryList_234') };
    get doneBtn() { return $('(.//button[@class="a-button-text"])') };
    get delPlaceVrf() {return $('#glow-ingress-line2')}
    get closeBtn() { return $('#attach-close_sideSheet-link') };
    get chartIcon() { return $('#nav-cart') };
    get chardCheck() { return $('#deselect-all') };
    get chartVal() {return $('#nav-cart-count')};
    get scroll() {
        const el = $('#p_n_feature_five_browse-bin-title > span');
        return el.scrollIntoView({block: "center"})
    };

}

module.exports = new AmazonPage();
