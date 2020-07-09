$(document).ready(function () {
    const toggle = $(".header__toggle");
    const menu = $("header");

    // Работа с мобильным меню
    function checkSize() {
        let enableMobMenu = function () {
            menu.addClass("header--js");

        }
        let disableMobMenu = function () {
            menu.removeClass("header--js");
        }

        if (/Mobile|webOs|BlackBerry|IEMobile|mini|Fennec|Winows Phone|Android|Ip(ad|od|hone)/i.test(navigator.userAgent)) enableMobMenu();
        // if ($(window).innerWidth() < 768)
        else disableMobMenu();
    }
    toggle.on('click', function () {
        menu.toggleClass("header--active");
    });
    checkSize();
    $(window).on("resize", checkSize);

    // Работа с  навигацией    
    function activateLink(newLink) {
        if (currentLink) currentLink.removeClass("link--active");
        currentLink = newLink;
        currentLink.addClass("link--active");
    }

    function scrollTo(section) {
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1000);
        if (menu.hasClass("header--active")) {
            menu.toggleClass("header--active");
        }
    }

    function moveTo(evtL) {

        evtL.preventDefault();
        const newSection = $(this).attr('href');
        scrollTo(newSection);
        // activateLink($(this));
    }

    let currentLink = null;
    $(".header__link").on("click", moveTo);
    $(".footer__link").on("click", moveTo);

    $(".intro__btn").on("click", function () {
        scrollTo($("#about"));
    });

    // Подгрузка товаров
    function renderGoods() {
        // debugger
        function renderOne(good) {
            return $("<li>", {
                class: "good products__item",
                append: $("<div>", {
                    class: "good__thumb",
                    append: $("<img>", {
                        src: `img/catalog/ceramic (${good.pic}).jpg`,
                        class: "good__img"
                    })
                }).add($("<span>", {
                    class: "good__name",
                    text: good.name
                })).add($("<span>", {
                    class: "good__price",
                    text: good.price
                })).add($("<a>", {
                    class: "good__link",
                    href: "#",
                    text: "More"
                }))
            })
        }
        mock.forEach(good => {
            const renderedElement = renderOne(good);
            renderedElement.hide();
            renderPlace.append(renderedElement);
            renderedElement.show(1000);
        })
    }
    const mock = [{
            "name": "Irwin",
            "price": 32,
            "pic": 4
        },
        {
            "name": "Ayva",
            "price": 60,
            "pic": 5
        },
        {
            "name": "Currie",
            "price": 23,
            "pic": 6
        }
    ];
    const renderPlace = $(".products__list");

    $(".products__load").on("click", renderGoods);

});