const Page = require('./page');

class stackOverflowPage extends Page {

    get logIn() { return $('[class="login-link s-btn s-btn__filled py8 js-gps-track"]')};
    get emailInp() { return $('#email')};
    get passwordInp() { return $('#password')};
    get submitBtn() { return $('#submit-button')};
    get logOutIcon() { return $('[class="svg-icon iconStackExchange"]')};
    get logOut() { return $('(.// a[@href="https://stackoverflow.com/users/logout"])[2]')};
    get lgOutVrf() { return $('[class="flex--item s-btn s-btn__primary"]')};
    get product() { return $('[class="-marketing-link js-gps-track js-products-menu"]')};
    get jobTitle() { return $('(.//span[@class="fs-body1 d-block"])[3]')};
    get searchInp() { return $('[id="q"]')};
    get remote() { return $('[id="r"]')};
    get searchBtn() { return $('[class="s-btn s-btn__md s-btn__primary js-trigger js-search-btn ws-nowrap h100"]')};
    get saveBtn() { return $('(.// a[@class="ta-center s-btn s-btn__outlined js-fav-toggle js-fav-text h100 w100"])[2]')};
    get job() {return $('(.//div[@class="d-flex ai-center"])[4]')};
    get savedJobsBtn() { return $('[id="TabSavedJobs"]')};
    get savedJobDiv() { return $('[class="mb24 pt12 sticky-header mxn4 px4"]')};
}

module.exports = new stackOverflowPage();
