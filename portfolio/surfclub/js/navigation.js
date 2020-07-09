$(document).ready(function() {
    $(".nav__item").click(function(e) {
        e.preventDefault();
        let section = '.' + $(this).attr("id");

        $('html, body').animate({
            scrollTop: $(section).offset().top + 30
        }, 1000);
    });

    // ------------------ go up by footer-logo
    $('.page-footer__logo').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
});