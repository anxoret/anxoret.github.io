"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var createModalImageDiv = exports.createModalImageDiv = function createModalImageDiv(container) {
    var div = document.createElement("div");
    div.classList = "modal-content modal-content_blue-grey-theme";
    div.innerHTML = "\n        <span class=\"modal-content__close-span modal-content__close-span_blue-grey-theme\" onclick=\"document.querySelectorAll('.close-icon')[1].style.display='none'\">\n            &times;\n        </span>\n        <img class=\"modal-content__img modal-content__img_blue-grey-theme\" alt=\"work-2\">\n        <div class=\"modal-content__caption modal-content__caption_blue-grey-theme\"></div>\n    ";
    container.append(div);
};

var hangEventsOnModalImageDiv = exports.hangEventsOnModalImageDiv = function hangEventsOnModalImageDiv(contentWorkContainer) {
    var image = contentWorkContainer.querySelector(".content__img");
    var modalContent = contentWorkContainer.querySelector(".modal-content");
    var modalContentImg = modalContent.querySelector(".modal-content__img");
    var modalContentCaption = modalContent.querySelector(".modal-content__caption");
    var contentImageText = contentWorkContainer.querySelector(".content__image-text");

    image.onclick = function () {
        modalContent.style.display = "block";
        modalContentImg.src = this.src;
        modalContentCaption.innerHTML = contentImageText.innerHTML;
    };

    var modalContentCloseSpan = modalContent.querySelector(".modal-content__close-span");
    modalContentCloseSpan.onclick = function () {
        modalContent.style.display = "none";
    };
};
