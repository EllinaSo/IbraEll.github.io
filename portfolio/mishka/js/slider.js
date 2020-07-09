"use strict";
(function setSlider() {
    const slider = document.querySelector(".slider");
    const slides = slider.querySelectorAll(".slider__slide");
    for (let i = 0; i < slides.length; i++) {
        if (i == 0) slides[i].classList.add("slider__slide--active");
        else slides[i].classList.add("slider__slide--hidden-right");
    }

    const prevBtn = slider.querySelector(".controls__btn--prev");
    prevBtn.classList.add("controls__btn--disabled");
    prevBtn.addEventListener("click", prevSlide);
    const nextBtn = slider.querySelector(".controls__btn--next");
    nextBtn.addEventListener("click", nextSlide);
    slider.querySelector(".slider__controls").style.display = "flex";

    let currentSlide = 0;
    let btnDisabled = prevBtn;

    function prevSlide() {
        debugger
        if (currentSlide == 0) return;
        checkDisabled();

        currentSlide--;
        changeSlide(currentSlide, "left", "right");

        if (currentSlide == 0) {
            btnDisabled = prevBtn;
            prevBtn.classList.add("controls__btn--disabled");
        }
    }

    function nextSlide() {
        if (currentSlide == (slides.length - 1)) return;
        checkDisabled();

        currentSlide++;
        changeSlide(currentSlide, "right", "left");

        if (currentSlide == (slides.length - 1)) {
            btnDisabled = nextBtn;
            nextBtn.classList.add("controls__btn--disabled");
        }
    }

    function changeSlide(nextSlide, takeFrom, moveTo) {
        const prevSlide = (takeFrom == "left") ? nextSlide + 1 : nextSlide - 1;
        slides[prevSlide].classList.add(`slider__slide--hidden-${moveTo}`);
        slides[nextSlide].classList.remove(`slider__slide--hidden-${takeFrom}`);
        slides[prevSlide].classList.remove("slider__slide--active");
        slides[nextSlide].classList.add("slider__slide--active");
    }

    function checkDisabled() {
        if (btnDisabled) {
            btnDisabled.classList.remove("controls__btn--disabled");
            btnDisabled = null
        }
    }
})();