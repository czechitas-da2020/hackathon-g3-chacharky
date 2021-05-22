let homePage = {
    get header() {return $('#header')},
    get searchForm() {return $('.header-rmsearch-primary')},
    get interiorSection() {return $('div#hotelInteriorBlock')},
    get amenitiesSection() {return $('div#hotelAmenitiesBlock')},
    get ourRoomsSection() {return $('div#hotelRoomsBlock')},
    get guestReviewSection() {return $('div#hotelTestimonialBlock')},
    get footer() {return $('.footer-container')}
}
module.exports = homePage
