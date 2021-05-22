const homePage = require('../pages/HPpage.js');

describe('Homepage', () => {
    beforeEach(()=>{
        browser.url('./')
    })

    
    it('for english mutation have a right URL', () => {
        browser.url('./en/');
        expect(browser).toHaveUrlContaining("czechitas-hackhaton.cz/en") // check if the URL meet the requirment
    })

    it('for czech mutation have a right URL',()=>{
        browser.url('./cs/');
        expect(browser).toHaveUrlContaining('czechitas-hackhaton.cz/cs') // check if the URL meet the requirment
    })

    
    it('contains header', ()=>{
        expect(homePage.header).toBeDisplayed(); // check if the homepage contains header or not
    })

    it('contains search form', ()=>{
        expect(homePage.searchForm).toBeDisplayed(); // check if the homepage contains search form or not
    })

    it('contains interior section', ()=>{
        expect(homePage.interiorSection).toBeDisplayed(); // check if the homepage contains interior section or not
    })

    it('contains amenities section', ()=>{
        expect(homePage.amenitiesSection).toBeDisplayed(); // check if the homepage contains amenities section or not
    })

    it('contains our rooms section', ()=>{
        expect(homePage.ourRoomsSection).toBeDisplayed(); // check if the homepage contains our rooms or not
    })

    it('contains customer review section', ()=>{
        expect(homePage.guestReviewSection).toBeDisplayed(); // check if the homepage contains customer review or not
    })

    it('contains footer', () =>{
        expect(homePage.footer).toBeDisplayed(); // check if the homepage contains footer or not
    })
})