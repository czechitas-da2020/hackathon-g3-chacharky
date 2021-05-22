let loggedPage = {
    get prihlasenTitle() { return $('#user_info_acc') },
    get myAccount() {return $('.page-heading')},
    get logoutButton() {return $('.dropdown-menu a[title="Log me out"]')},
  }
  
  module.exports = loggedPage