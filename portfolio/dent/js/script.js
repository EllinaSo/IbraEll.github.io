$(document).ready(function () {
    const doctorsSlider = new Swiper('.doctors__slider', {
        pagination: {
            el: '.doctors__pagination',
            clickable: true
        },
        spaceBetween: 10,
    
        breakpoints: {
            500: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        }
    })
    
    const stocksSlider = new Swiper('.stocks__slider', {
        slidesPerView: 1,
        pagination: {
            el: '.stocks__pagination',
            clickable: true
    
        },
    })
    
    const blogSlider = new Swiper('.blog__slider', {
        pagination: {
            el: '.blog__pagination',
            clickable: true
        },
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    })

    $("#phone").inputmask({"mask": "+7 (999) 999-99-99"}); 
    let lastId;
    const menu = $(".header"),
        menuHeight = menu.outerHeight() / 2,
        menuItems = menu.find(".nav-link"),
        scrollItems = menuItems.map(function () {
            const item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        }),
        collapsingNav = menu.find(".collapse"),
        introNavItems = $(".intro__cards a"),
        footerNav = $(".footer__nav"),
        footerItems = footerNav.find("a"),
        windowHalfHeight = $(window).height() / 2;

    function scrollToSection(e) {
        e.preventDefault();
        const href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - menuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        if (collapsingNav.hasClass("show")) {

            setTimeout(function () {
                collapsingNav.collapse('hide');
            }, 300);
        }
    }

    menuItems.click(scrollToSection);
    introNavItems.click(scrollToSection);
    footerItems.click(scrollToSection);

    $(window).scroll(function () {
        const fromTop = $(this).scrollTop() + menuHeight + windowHalfHeight;

        let cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        cur = cur[cur.length - 1];
        const id = cur && cur.length ? cur[0].id : "";
        if (lastId !== id) {
            lastId = id;
            menuItems.removeClass("active");
            menuItems.filter("[href='#" + id + "']").addClass("active");
        }
    });

});