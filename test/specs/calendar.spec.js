describe('Calendar', () => {

    before(()=>{
        browser.url("https://www.czechitas.cz/en/calendar")
    })

    it('is loaded and displayed', () => {
        
        expect($('body')).toBeVisible();
    })
})