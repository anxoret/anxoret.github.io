"use strict";

var contentWorkContainers = document.querySelectorAll(".content__work-container");

contentWorkContainers.forEach(function (container, i) {
    // skip last container, because it has information only about Github profile
    if (i == contentWorkContainers.length - 1) return;

    var image = container.querySelector(".content__img");
    var modalContent = container.querySelector(".modal-content");
    var modalContentImg = modalContent.querySelector(".modal-content__img");
    var modalContentCaption = modalContent.querySelector(".modal-content__caption");
    var contentImageText = container.querySelector(".content__image-text");

    image.onclick = function () {
        modalContent.style.display = "block";
        modalContentImg.src = this.src;
        modalContentCaption.innerHTML = contentImageText.innerHTML;
    };

    var modalContentCloseSpan = modalContent.querySelector(".modal-content__close-span");
    modalContentCloseSpan.onclick = function () {
        modalContent.style.display = "none";
    };
});
