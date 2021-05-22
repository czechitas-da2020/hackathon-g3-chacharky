const homePage = require('../pages/HPpage.js');

describe('Homepage', () => {
    beforeEach(()=>{
        browser.url('./')
    })

    /* it('in english is displayed after enters URL of the website for english mutation', () => {
        browser.url('./en/');
        expect(browser).toHaveUrlContaining("czechitas-hackhaton.cz/en")
    })

    it('in czech is displayed after enters URL of the website for czech mutation',()=>{
        browser.url('./cs/');
        expect(browser).toHaveUrlContaining('czechitas-hackhaton.cz/cs')
    }) */

    it('contains header', ()=>{
        expect(homePage.header).toBeDisplayed();
    })

    it('contains search form', ()=>{
        expect(homePage.searchForm).toBeDisplayed();
    })

    it('contains interior section', ()=>{
        expect(homePage.interiorSection).toBeDisplayed();
    })

    it('contains amenities section', ()=>{
        expect(homePage.amenitiesSection).toBeDisplayed();
    })

    it('contains our rooms section', ()=>{
        expect(homePage.ourRoomsSection).toBeDisplayed();
    })

    it('contains customer review section', ()=>{
        expect(homePage.guestReviewSection).toBeDisplayed();
    })

    it('contains footer', () =>{
        expect(homePage.footer).toBeDisplayed();
    })
})