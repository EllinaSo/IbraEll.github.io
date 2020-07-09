"use strict";
(function () {
    const btnCart = Array.from(document.querySelectorAll("#to-cart"));
    const modalCart = document.querySelector(".modal--cart");
    const bgCart = document.querySelector(".modal__bg");
    let elementPressed = null;
    btnCart.forEach(btn => btn.addEventListener("click", openModal));
    
    const addBtn = modalCart.querySelector(".modal__btn");
    addBtn.addEventListener("click", addToCart);

    bgCart.addEventListener("click", closeModal);

    function openModal(evt) {
        evt.preventDefault();
        elementPressed = evt.target;
        modalCart.style.display = "flex";
        bgCart.style.display = "block";
        modalCart.querySelector(".modal__radio").focus();
        document.addEventListener("keydown", onEscClose);

        function onEscClose(evt) {
            const ESC_CODE = 27;
            if (evt.keyCode == ESC_CODE) {
                evt.preventDefault();
                closeModal();
                document.removeEventListener("keydown", onEscClose);
            }
        }
    }
    
    function addToCart(evtCart) {
        evtCart.preventDefault();
        //----Отправка данных на сервер----//
        const cartContent = document.querySelector(".user__cart-content");
        updateCart();
        closeModal();

        function updateCart() {
            if (!parseInt(cartContent.textContent)) {
                cartContent.innerHTML = ` 1 <span>шт.</span>`
            }
            else {
                debugger
                const value = parseInt(cartContent.textContent)+1
                cartContent.innerHTML = ` ${value} <span>шт.</span>`
            }
        }
    }

    function closeModal() {
        modalCart.style.display = "none";
        bgCart.style.display = "none";
        if (elementPressed) {
            elementPressed.focus();
            elementPressed = null;
        }
    }
})();