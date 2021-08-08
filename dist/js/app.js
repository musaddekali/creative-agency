
// Owl Carousel Init 
$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
});