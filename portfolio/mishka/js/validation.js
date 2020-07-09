"use strict";
(function () {
    const form = document.querySelector(".order__form");

    form.addEventListener("submit", function (evt) {
        const checkBoxes = form.querySelectorAll("input[type=checkbox]");

        let isAnyCheck = function (checkBoxes) {
            for (let checkbox = 0; checkbox < checkBoxes.length; checkbox++) {
                if (checkBoxes[checkbox].checked) return true;

            }
            return false;
        }
        if (!isAnyCheck(checkBoxes)) {
            evt.preventDefault();
            alert("Пожалуйста, выберите цвет заказа! Заказ не отправлен.");
        }
    });
})();