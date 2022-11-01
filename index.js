// Toggler jquerry

$('.menu-toggle').click(function() {

    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');

})


// web-3 image change...................

$(window).resize(function() {

    $(function() {
        if ($(window).width() < 400) {
            $(".web-image").each(function() {
                $(this).attr("src", "./assets/images/image-web-3-mobile.jpg");
            });

        } else if ($(window).width() >= 400) {
            $(".web-image").each(function() {
                $(this).attr("src", "./assets/images/image-web-3-desktop.jpg");
            });
        }
    });
});