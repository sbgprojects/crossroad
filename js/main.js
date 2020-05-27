// =================================
// back to top scrolling button
// =================================
window.addEventListener('scroll', function () {
    var scroll = this.document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500);
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


// =================================
// sync client slider
// =================================
$('.slider-up').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-down',
    ltr: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.slider-down').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-up',
    prevArrow: " .slider-btn1 .prev",
    nextArrow: " .slider-btn1 .next",
    dots: false,
    focusOnSelect: true,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// transitions

// $(function () {
//     if ($('footer').is(':visible')) {
//         $('footer').addClass('red');
//     }
// });
$(document).ready(function () {
    if ($('.content-right').is(':visible')) {
        $('.content-right').addClass('animateLI');
    }
});
// $(window).on('scroll', function () {
//     var $elem = $('.content-right');
//     var $window = $(window);
//     $('.content-right').addClass('animateLI');
//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();
//     var elemTop = $elem.offset().top;
//     var elemBottom = elemTop + $elem.height();
//     if (elemBottom < docViewBottom) {
//         $('.content-right').addClass('animateLI');
//     }
// });