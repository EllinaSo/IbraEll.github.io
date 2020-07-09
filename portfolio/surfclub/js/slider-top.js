$(document).ready(function() {
    var owl = $('.slider-top__list');

    owl.on('initialized.owl.carousel', setTotal)
    owl.on('initialized.owl.carousel', setCurrent)

    $(owl).owlCarousel({
        rewind:true,
        items: 1,
        // autoplay: true,
        smartSpeed: 1000,
        center: true
    });
    owl.on('changed.owl.carousel', setCurrent)

    $('.slider-top__controls--next').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.slider-top__controls--prev').click(function() {
        owl.trigger('prev.owl.carousel');
    })
});

function setCurrent(event) {
    var current = $('.slider-top__number--curr');
    current.text(event.item.index + 1);
}


function setTotal(event) {
    var total = $('.slider-top__number--total');
    total.text(event.item.count);
}