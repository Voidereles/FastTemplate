import 'bootstrap';

function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (this.window.pageYOffset > 80) {
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("fixedNavbar").style.top = "0";
                document.getElementById("fixedNavbar").style.background = "#EFE9E7";
            } else {
                document.getElementById("fixedNavbar").style.top = "-100px";
                document.getElementById("fixedNavbar").style.background = "initial";
            }
            prevScrollpos = currentScrollPos;
        }
    };
}

headerOnScroll();

// $(document).ready(function () {
//     $('.js-eventType').select2();
//     $('.js-additionalSelect').select2();

// });