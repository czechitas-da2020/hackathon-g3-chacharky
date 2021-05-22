let homePage = {
    get hotelName() {return $('.header-hotel-name')}, // refers to the name of hotel on main page
    get header() {return $('#header')}, //refers to the part of page - header
    get searchForm() {return $('.header-rmsearch-primary')}, //refers to the part of page - search form
    get interiorSection() {return $('div#hotelInteriorBlock')}, //refers to the part of page - interior section
    get amenitiesSection() {return $('div#hotelAmenitiesBlock')}, //refers to the part of page - amenities section
    get ourRoomsSection() {return $('div#hotelRoomsBlock')}, //refers to the part of page - our room section
    get guestReviewSection() {return $('div#hotelTestimonialBlock')}, //refers to the part of page - review of the host section
    get footer() {return $('.footer-container')} //refers to the part of page - footer
}
module.exports = homePage
