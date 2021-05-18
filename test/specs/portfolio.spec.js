const templatePage = require('../pages/template.page')

describe('Portfolio page', () => {
    before(()=>{
        browser.url("https://www.czechitas.cz/en/portfolio")
    })

    it('is loaded and displayed', () => {
        
        expect($('body')).toBeVisible();
    })
})