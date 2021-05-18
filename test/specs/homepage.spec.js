const templatePage = require('../pages/template.page')

describe('Homepage', () => {
    before(()=>{
        browser.url("https://www.czechitas.cz/")
    })

    it('is loaded and displayed', () => {
        
        expect($('body')).toBeVisible();
    })
})