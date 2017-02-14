console.log("scroll.js - IT WORKS!");

function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}
function scrollTopPos() {
    var supportPageOffset = window.pageXOffset !== undefined,
            isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"),
            y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    return y;
}
var distance = 30,
        timeout = 10;
function navScroll(curPos, sectionTop) {
    if (Math.abs(curPos - sectionTop) <= distance) {
        curPos = sectionTop;
    } else {
        var dir = (curPos > sectionTop) ? -distance : distance;
        // var dir;
        // if (curPos > sectionTop) {
        //		dir = -distance;
        // } else {
        // 		dir = distance;
        // }
        curPos += dir;
        setTimeout(function () {
            navScroll(curPos, sectionTop)
        }, timeout);
    }
    window.scrollTo(0, curPos);
}
function navClick(e) {
    e.preventDefault();
    var curPos = scrollTopPos(),
            href = this.getAttribute("href");

    console.log(href);
    var sectionTop = $(href).offsetTop;
    sectionTop -= 30;
    if (sectionTop < 0) {
        sectionTop = 0;
    }
    navScroll(curPos, sectionTop);
}

var navItems = $$(".main-nav a, .logo-info a");

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", navClick);
}



// option B

// (function() {
// var navigations = $$('.main-nav a, .logo-info a');
//
// for (var index in navigations) {
//     var item = navigations[index];
//     item.onclick = function(event) {
//         event.preventDefault();
//         var scrollElementID = this.getAttribute('href');
//         var scrollElement = $(scrollElementID);
//         if (scrollElement) {
//             var distanceFromTop = scrollElement.offsetTop;
//             var scrollDistanceFromTop = document.documentElement.scrollTop || document.body.scrollTop;
//             var distance = distanceFromTop - scrollDistanceFromTop;
//             var navbarHeight = $('#top').offsetHeight;
//             var step = 20;
//             scroll(distance, step);
//         }
//     }
// }
//
// function scroll(distance, step = 0) {
//     window.setTimeout(function() {
//         if (distance >= 0) {
//             if (distance < step) {
//                 window.scrollBy(0, distance);
//             } else {
//                 window.scrollBy(0, step);
//                 distance = distance - step;
//                 scroll(distance, step)
//             }
//         } else {
//             if (distance > step) {
//                 window.scrollBy(0, distance);
//             } else {
//                 window.scrollBy(0, -step);
//                 distance = distance + step;
//                 scroll(distance, step)
//             }
//         }
//     }, 10)
// }
// })()
