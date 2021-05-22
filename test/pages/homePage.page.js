let homePage = {
    baseUrl: browser.config.baseUrl,
    navbar: {
      get logo() { return $('#header_logo .logo.img-responsive') },
      get signIn() { return $(".hide_xs")},
      get browser() {return $('title')},
      get welcomeText() {return $('.header-desc-welcome')},
      get hotelName() {return $('.header-hotel-name')},
      get checkInDate() {return $('#check_in_time')},
      get checkOutDate() {return $('#check_out_time')}
    },
  
    // function open, just open page :)
    open: function () {
      browser.url("/")
    }
  
    
  }
  
  module.exports = homePage;