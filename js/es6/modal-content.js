"use strict";

export const createModalImageDiv = (container) => {
    let div = document.createElement("div");
    div.classList = "modal-content modal-content_blue-grey-theme";
    div.innerHTML = `
        <span class="modal-content__close-span modal-content__close-span_blue-grey-theme" onclick="document.querySelectorAll('.close-icon')[1].style.display='none'">
            &times;
        </span>
        <img class="modal-content__img modal-content__img_blue-grey-theme" alt="work-2">
        <div class="modal-content__caption modal-content__caption_blue-grey-theme"></div>
    `;
    container.append(div);
};

export const hangEventsOnModalImageDiv = (contentWorkContainer) => {
    let image = contentWorkContainer.querySelector(".content__img");
    let modalContent = contentWorkContainer.querySelector(".modal-content");
    let modalContentImg = modalContent.querySelector(".modal-content__img");
    let modalContentCaption = modalContent.querySelector(".modal-content__caption");
    let contentImageText = contentWorkContainer.querySelector(".content__image-text");

    image.onclick = function() {
        modalContent.style.display = "block";
        modalContentImg.src = this.src;
        modalContentCaption.innerHTML = contentImageText.innerHTML;
    };

    let modalContentCloseSpan = modalContent.querySelector(".modal-content__close-span");
    modalContentCloseSpan.onclick = () => {
        modalContent.style.display = "none";
    };
};





