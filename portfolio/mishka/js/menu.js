"use strict";
(function () {
    const menu = document.querySelector(".header__bar");
    const toggle = menu.querySelector(".header__toggle");
    const content = document.querySelector("section");

    let onMenuBtnClick = function (evt) {
        evt.preventDefault();
        menu.classList.toggle("header__bar--active");
        menu.classList.toggle("header__bar--disabled");

        if (menu.classList.contains("header__bar--active")) {
            window.addEventListener("scroll", onMenuBtnClick);
        }
        else{
            window.removeEventListener("scroll", onMenuBtnClick);
        }
    }
    let checkSize = function () {
        // if (/Mobile|webOs|BlackBerry|IEMobile|mini|Fennec|Winows Phone|Android|Ip(ad|od|hone)/i.test(navigator.userAgent)) {
        if (menu.offsetWidth < 768) {
            content.style.paddingTop = menu.querySelector(".header__logo").offsetHeight + "px";

            menu.classList.add("header__bar--disabled");

            document.querySelector(".header").style.position = "fixed";
            toggle.style.display = "block";

            toggle.addEventListener("click", onMenuBtnClick);

        } else {
            content.style.paddingTop = "0px";
            menu.classList.remove("header__bar--disabled");
            menu.classList.remove("header__bar--active");
            document.querySelector(".header").style.position = "static";
            toggle.style.display = "none";
            toggle.removeEventListener("click", onMenuBtnClick);
        }
    }
    checkSize();
    window.addEventListener("resize", checkSize)


})();