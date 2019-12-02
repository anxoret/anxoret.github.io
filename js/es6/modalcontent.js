let contentWorkContainers = document.querySelectorAll(".content__work-container");

contentWorkContainers.forEach( (container, i) => {
    // skip last container, because it has information only about Github profile
    if (i == contentWorkContainers.length - 1) return;

    let image = container.querySelector(".content__img");
    let modalContent = container.querySelector(".modal-content");
    let modalContentImg = modalContent.querySelector(".modal-content__img");
    let modalContentCaption = modalContent.querySelector(".modal-content__caption");
    let contentImageText = container.querySelector(".content__image-text");

    image.onclick = function () {
        modalContent.style.display = "block";
        modalContentImg.src = this.src;
        modalContentCaption.innerHTML = contentImageText.innerHTML;
    };

    let modalContentCloseSpan = modalContent.querySelector(".modal-content__close-span");
    modalContentCloseSpan.onclick = () => {
        modalContent.style.display = "none";
    };

});


