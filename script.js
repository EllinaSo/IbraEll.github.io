"use strict";
(function () {
    const menu = document.querySelector(".menu");
    const anchors = Array.from(menu.querySelectorAll(".navigation__item"));

    // Активация меню для мобильных устройств
    let toggleMenu = function () {
        menu.classList.toggle("menu--active");
    }
    let checkSize = function () {
        let enableMobileMenu = function () {
            menu.style.position = "fixed";
            toggle.style.display = "block";
            anchors.forEach(anchor => {
                anchor.addEventListener("click", toggleMenu);
            })
        }
        let disableMobileMenu = function () {
            menu.style.position = null;
            toggle.style.display = "none";
            if (menu.classList.contains("menu--active")) toggleMenu();
            anchors.forEach(anchor => {
                anchor.removeEventListener("click", toggleMenu);
            })
        }

        // if (/Mobile|webOs|BlackBerry|IEMobile|mini|Fennec|Winows Phone|Android|Ip(ad|od|hone)/i.test(navigator.userAgent)) {
        if (window.innerWidth < 768) enableMobileMenu();
        else disableMobileMenu();
    }
    const toggle = menu.querySelector(".menu__toggle");
    toggle.addEventListener("click", toggleMenu);
    checkSize();
    window.addEventListener("resize", checkSize);

    // Плавный скролл к выбранной секции
    let setAnchor = function (newAnchor) {
        if (currentAnchor) {
            currentAnchor.classList.remove("navigation__item--active");
        }
        newAnchor.classList.add("navigation__item--active");
        currentAnchor = newAnchor;
    };

    let currentAnchor = null;
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (evt) {
            let scrollToSection = function () {
                const sectionId = anchor.getAttribute("href").substr(1);
                document.getElementById(sectionId).scrollIntoView({
                    behavior: "smooth"
                });
            };

            evt.preventDefault();
            setAnchor(this);
            window.removeEventListener("scroll", onScroll);
            scrollToSection();
            setTimeout(function () {
                window.addEventListener("scroll", onScroll);
            }, 1000);
        })
    })

    // Отслеживание скролла в навигации
    const sections = Array.from(document.querySelectorAll("section"));
    let onScroll = function (evt) {
        const currentCoord = this.pageYOffset;
        const footerBound = document.body.scrollHeight - 30;
        for (let section = sections.length - 1; section >= 0; section--) {
            if (currentCoord + window.innerHeight > footerBound) {
                setAnchor(anchors[anchors.length - 1]);
                return;
            }
            if (currentCoord >= sections[section].offsetTop + 10) {
                setAnchor(anchors[section]);
                return;
            }
        }
    };
    window.addEventListener("scroll", onScroll);
    //Обновление года в футере
    let dateSpan = document.querySelector(".footer__date");
    dateSpan.innerHTML = (new Date).getFullYear();
})();