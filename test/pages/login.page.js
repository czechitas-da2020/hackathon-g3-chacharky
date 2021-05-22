let loginPage = {
    get createButton() {return $('#SubmitCreate')},
    get signInButton() {return $('#SubmitLogin')},
    get h1() {return $('.page-heading')},
    get emailField() {return $('#email')},
    get passwordField() {return $('#passwd')},
    }

module.exports = loginPage