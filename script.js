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



function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (this.window.pageYOffset > 105) {
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("fixedNavbar").style.top = "0";
            } else {
                document.getElementById("fixedNavbar").style.top = "-100px";
            }
            prevScrollpos = currentScrollPos;
        }
    };
}

headerOnScroll();

$(document).ready(function () {
    $('.js-eventType').select2();
    $('.js-additionalSelect').select2();

});