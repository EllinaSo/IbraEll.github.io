$(document).ready(function() {
    var owl = $('.goods-slider__list');

    $(owl).owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        // center: true,
        startPosition: 1,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1060: {
                center: true,
                items: 3
            }
        }
    });



    $('.goods-slider__controls--next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.goods-slider__controls--prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })
});