/* 
Before testing, I created the following test data:
email = PetraLuptak@gmail.com,
password = Masteradmin1.

I registered with the application with this test data.
*/

let homePage = require('../pages/homePage.page')
let loginPage = require('../pages/login.page')
let loggedPage = require('../pages/logged.page')

describe('HomePage', () => {
    before(() => {
      homePage.open()
    })
  
    it('should have correct title', () => {
      expect(homePage.navbar.browser).toHaveTitle("Czechitas DA Hackathon")   // check title, because it is the core of page
    })
    
    it('should have fox logo with id "header_logo"', () => {
      expect(homePage.navbar.logo).toBeVisible()        // check fox logo of the page
    })
  
    it('should have sign in button', () => {
      expect(homePage.navbar.signIn).toBeVisible()       // check sign in button
    })
  
    it('should have welcome text "Welcome To"', () => {
      expect(homePage.navbar.welcomeText).toHaveText('Welcome To')     // check that there is text "Welcome To"
    })
  
    it('should have hotel name "Three foxes lounge"', () => {
      expect(homePage.navbar.hotelName).toHaveText('Three foxes lounge')     // check that there is hotel name "Three foxes lounge"
    })
  
    it('should have field "Check In Date"', () => {
      expect(homePage.navbar.checkInDate).toBeVisible()      // check that I see "Check In Date" field
    })
  
    it('should have field "Check Out Date"', () => {
      expect(homePage.navbar.checkOutDate).toBeVisible()       // check that I see "Check Out Date" field
    })

describe('Open URL of application and click on "Sign in" button. Login page', () => {
    
     before(() => {
        homePage.open()
        homePage.navbar.signIn.click()                          // click on link "Sign In"
      })
    
      it('should have button "Create an account"', () => {
      expect(loginPage.createButton).toBeVisible()              // I can see button "Create an account"
    })

    it('should have button "Sign in"', () => {
        expect(loginPage.signInButton).toBeExisting()      // check that "Sign in" button is present
    })

    it('should have heading h1 with text "AUTHENTICATION"', () => {
        expect(loginPage.h1).toHaveText('AUTHENTICATION')                      // check that text "AUTHENTICATION" is present on the page
    })

    it('correct URL', () => {
        expect(loginPage.h1).toHaveUrl('http://czechitas-datestovani-hackathon.cz/en/login?back=my-account')     // check correct URL /login
    })

    describe('Login to the application', () => {
    it('with defined values', () => {
        let email = 'PetraLuptak@gmail.com'      //defines value email with testing data - see above
        let password = 'Masteradmin1'           //defines value password with testing data - see above

        loginPage.emailField.setValue(email)        // set the define value to the email field
        loginPage.passwordField.setValue(password)   // set the define value to the password field
        loginPage.signInButton.click()              // click on the button "sign In"
    
        expect(loggedPage.prihlasenTitle).toHaveText('Petra')      // when the user is logged in, I see the name above
      })

      it('should have text "My account"', () => {
        expect(loggedPage.myAccount).toHaveTextContaining('MY ACCOUNT')  // when the user is logged in, the header of page contains text "MY ACCOUNT"
    })
      
  })

})

})
