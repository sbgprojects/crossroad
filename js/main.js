// ===========================================================
// dropdown hover
// ===========================================================
$('.dropdown').hover(function () {
    $('.dropdown-toggle', this).trigger('click');
});

// ===========================================================
// hero play pause
// ===========================================================
$("#hero-play").click(function () {
    $("#video-thumb").css('display', 'none');
    $(this).css('display', 'none');
    $("#hero-video").css('display', 'block');
    $("#hero-video").trigger('play');
});


// ===========================================================
// isotope
// ===========================================================

$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $(".filter-btn-group").on("click", 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $(".grid").isotope({
            filter: filterValue
        });
        $(".filter-btn-group li").removeClass("active");
        $(this).addClass("active");
    });
});