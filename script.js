// var $ = require("jquery");
import 'bootstrap';

import 'ion-rangeslider';
// import 'rangeslider';

function headerOnScroll() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (this.window.pageYOffset > 60) {
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("fixedNavbar").style.top = "0";
                document.getElementById("fixedNavbar").style.background = "#EFE9E7";
            } else {
                document.getElementById("fixedNavbar").style.top = "-81px";
                document.getElementById("fixedNavbar").style.background = "initial";
            }
            prevScrollpos = currentScrollPos;
        }
    };
}

headerOnScroll();



$(function () {
    const tibiaCoinsValue = document.getElementById('tibiaCoinsValue');
    const tibiaCoinsInput = document.getElementById('tibiaCoinsInput');



    // $('.js-eventType').select2();
    // $('.js-additionalSelect').select2();
    $("#tibiaCoinsRangeSlider").ionRangeSlider({
        skin: "square",
        min: 25,
        max: 10000,
        from: 2020,
        step: 25,
        postfix: " TC",
        onStart: function (data) {
            tibiaCoinsInput.setAttribute('value', data.from);
        },
        onChange: function (data) {
            tibiaCoinsInput.setAttribute('value', data.from);
            tibiaCoinsValue.innerHTML = "Koszt <span class='font-weight-bold'>" + data.from + "</span> Tibia Coins to: <span class='color-gold font-weight-bold'>" + (data.from / 16.35).toFixed(2) + "  zł</span>";
        },
    });

    let instanceOfTibiaCoinsRangeSlider = $("#tibiaCoinsRangeSlider").data("ionRangeSlider");
    tibiaCoinsInput.addEventListener("input", function () {
        if (this.value % 25 == 0) {
            console.log(this.value);
            instanceOfTibiaCoinsRangeSlider.update({
                from: this.value
            });
            tibiaCoinsValue.innerHTML = "Koszt <span class='font-weight-bold'>" + this.value + "</span> Tibia Coins to: <span class='color-gold font-weight-bold'>" + (this.value / 16.35).toFixed(2) + "  zł</span>";
        }
    })






    const tibiaGoldValue = document.getElementById('tibiaGoldValue');
    const tibiaGoldInput = document.getElementById('tibiaGoldInput');

    $("#tibiaGoldRangeSlider").ionRangeSlider({
        skin: "square",
        min: 1,
        max: 100,
        from: 2,
        step: 1,
        postfix: " kk",
        onStart: function (data) {
            tibiaGoldInput.setAttribute('value', data.from);
        },
        onChange: function (data) {
            tibiaGoldInput.setAttribute('value', data.from);
            tibiaGoldValue.innerHTML = "Koszt <span class='font-weight-bold'>" + data.from + "kk</span> Tibia Gold to: <span class='color-gold font-weight-bold'>" + (data.from * 11.63).toFixed(2) + "  zł</span>";
        },
    });

    let instanceOfTibiaGoldRangeSlider = $("#tibiaGoldSlider").data("ionRangeSlider");
    tibiaGoldInput.addEventListener("input", function () {
        if (this.value % 1 == 0) {
            console.log(this.value);
            instanceOfTibiaGoldRangeSlider.update({
                from: this.value
            });
            tibiaGoldValue.innerHTML = "Koszt <span class='font-weight-bold'>" + this.value + "kk</span> Tibia Gold to: <span class='color-gold font-weight-bold'>" + (this.value * 11.63).toFixed(2) + "  zł</span>";
        }
    })
});