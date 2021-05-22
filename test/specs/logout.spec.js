let loginPage = require('../pages/login.page')
let loggedPage = require('../pages/logged.page')
let homePage = require('../pages/homePage.page')

describe('Open URL of application and click on "Sign in" button. Then', () => {
    
    before(() => {
       homePage.open()                              // open the application website which is defined in the 
       homePage.navbar.signIn.click()                          // click on link "Sign In" homePage.page.js
     })
   
    it('login to the application', () => {
        let email = 'PetraLuptak@gmail.com'      //defines value email with testing data - see above
        let password = 'Masteradmin1'           //defines value password with testing data - see above

        loginPage.emailField.setValue(email)        // set the define value to the email field
        loginPage.passwordField.setValue(password)   // set the define value to the password field
        loginPage.signInButton.click()              // click on the button "sign In"
   
       })

       it ('logout from the application', () => {
           loggedPage.prihlasenTitle.click()     // click on the button with user name
           loggedPage.logoutButton.click()      // click on the logout option

           expect(homePage.navbar.signIn).toHaveTextContaining('Sign in')     // check the user was logged out

       })


 })