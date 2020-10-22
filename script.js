$('.hero__carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    margin: 0,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
    dots: false,
});

$('.gallery__carousel').owlCarousel({
    loop: true,
    lazyLoad: true,
    margin: 40,
    responsiveClass: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        600: {
            items: 2,
            dots: true
        },
        992: {
            items: 3,
            dots: false
        }
    }
});