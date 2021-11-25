const amazon = require('../pageobjects/amazon.page');

describe("Amazon page", () => {

    beforeEach('Should sign in and verify',async () => {
        await amazon.open();
        await amazon.signInIcon.click();
        await amazon.logInInp.addValue('yripsime@mail.ru');
        await amazon.cntBtn.click();
        await amazon.passInp.addValue('Ripulik17');
        await amazon.signIn.click();
        await expect(amazon.signedText).toHaveText('Hello, Ignit');
    });

    afterEach('Should sign out and verify',async () => {
        await amazon.signInIcon.moveTo();
        await expect(amazon.signInPopup).toBeDisplayed();
        await amazon.signOut.waitForClickable();
        await amazon.signOut.click();
        await amazon.amazonIcon.click();
        await expect(amazon.signedText).toHaveText("Hello, Sign in");
    });

    it('It should choose the Delivery place', async () => {
        await amazon.deliveryPlace.click();
        await expect(amazon.popupOfDelivery).toBeDisplayed();
        await amazon.placeSelectorBtn.click();
        await amazon.delPlace.click();
        await amazon.doneBtn.waitForClickable();
        await amazon.doneBtn.click();
        await expect(amazon.delPlaceVrf).toHaveText('United Kingdom')
    });

    it('It should search laptop and add to cart', async () => {
        await amazon.searchInput.addValue('laptop');
        await amazon.searchBtn.click();
        await expect(amazon.searchInput).toHaveValue("laptop");
        await amazon.brand.click();
        await amazon.laptop.click();
        await amazon.addBtn.click();
        await amazon.closeBtn.waitForClickable();
        await amazon.closeBtn.click();
        await expect(amazon.chartVal).toHaveText('1');
    });

    it('It should go to cart and chek the order', async () => {
        await amazon.chartIcon.click();
        await expect(amazon.chardCheck).toHaveTextContaining("Deselect all items");
    });

});
