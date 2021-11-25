const stackOverflow = require('../pageobjects/stackOverflow.page');


describe("Stack Overflow page", async () => {

    beforeEach('Should sign in', async () => {
        await stackOverflow.open();
        await stackOverflow.logIn.click();
        await stackOverflow.emailInp.addValue('versmith@mail.ru');
        await stackOverflow.passwordInp.addValue('Abc11777');
        await stackOverflow.submitBtn.click();
        await expect(stackOverflow.logOutIcon.isDisplayed());
    });

    afterEach('Should log out', async () => {
            await stackOverflow.logOutIcon.click();
            await stackOverflow.logOut.waitForClickable();
            await stackOverflow.logOut.click();
            await stackOverflow.lgOutVrf.click();
    });

    it('Should search a job and save', async () => {
        await stackOverflow.logOutIcon.waitForDisplayed();
        await stackOverflow.product.click();
        await stackOverflow.jobTitle.click();
        await stackOverflow.searchInp.addValue("JavaScript");
        await stackOverflow.remote.click();
        await stackOverflow.searchBtn.click();
        await stackOverflow.saveBtn.waitForClickable();
        await stackOverflow.saveBtn.click();
        await expect(stackOverflow.saveBtn).toHaveText('Saved');
    });

    it('Should check saved job', async () => {
        await stackOverflow.logOutIcon.waitForDisplayed();
        await stackOverflow.product.click();
        await stackOverflow.jobTitle.click();
        await stackOverflow.savedJobsBtn.click();
        await expect(stackOverflow.savedJobDiv).toBeDisplayed();
    });

});
