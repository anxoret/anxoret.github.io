let modalContent = document.querySelectorAll(".modal-content")[0];
let image = document.querySelectorAll(".content__img")[1];
let modalContentImg = document.querySelectorAll(".modal-content__img")[0];
let modalContentCaption = document.querySelectorAll(".modal-content__caption")[0];

console.log(image);

image.onclick = function () {
    modalContent.style.display = "block";
    modalContentImg.src = this.src;
    modalContentCaption.innerHTML = this.alt;
    // console.log("jj");
}

let modalContentCloseSpan = document.querySelectorAll(".modal-content__close-span")[0];
modalContentCloseSpan.onclick = function () {
    modalContent.style.display = "none";
}

