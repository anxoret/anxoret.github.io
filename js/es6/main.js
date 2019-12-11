"use strict";

import {createModalImageDiv} from "./modal-content.js";
import {hangEventsOnModalImageDiv} from "./modal-content.js";

// write a h1 at DOMContentLoaded event
function writeH1LetterByLetter(permanentH1Class) {
    let requiredH1Text = "@anxoret.dev";
    let h1 = document.querySelector("." + permanentH1Class);

    let arrayOfLettersOfH1 = requiredH1Text.split("");

    let innerTextInH1 = "";

    let i = 0;

    let callIntervalFunction = setInterval(writeText, 120);

    function writeText() {
        if (i < arrayOfLettersOfH1.length) {
            innerTextInH1 += arrayOfLettersOfH1[i];
            h1.innerText = innerTextInH1;
            i++;
        } else {
            clearInterval(callIntervalFunction);
        }
    };

};

document.addEventListener("DOMContentLoaded", 
    writeH1LetterByLetter("header__h1_blue-grey-theme")
);

// hide and show spans in h2
function showOrHideClassOfElementsInDOM(permanentClassOfTheElements, hidingClassOfTheElements) {
    let elementsToShowOrHide = document.querySelectorAll("." + permanentClassOfTheElements);

    elementsToShowOrHide.forEach(element => {
        if (element.classList.contains(hidingClassOfTheElements)) {
            element.classList.remove(hidingClassOfTheElements);
        } else {
            element.classList.add(hidingClassOfTheElements);
        }

    });

};

setInterval(() => {
    showOrHideClassOfElementsInDOM("content__span_blue-grey-theme", "content__span_hidden");
}, 1000);

// open and close a small navigation menu
function openOrHideSmallNavigationMenu() {
    let smallNavigationMenu = document.querySelector(".small-navigation__menu_blue-grey-theme");
    let h1 = document.querySelector(".header__h1_blue-grey-theme");
    let spans = document.querySelectorAll(".small-navigation__span_blue-grey-theme");
    let spanToHide = spans[1]; // hide second span from DOM (in small navigation button)

    if (smallNavigationMenu.style.display == "none") {
        smallNavigationMenu.style.display = "block";
        h1.style.display = "none";
        spanToHide.classList.add("small-navigation__span_hidden");
        spans[0].classList.add("small-navigation__span_rotate-right");
        spans[2].classList.add("small-navigation__span_rotate-left");
    } else {
        smallNavigationMenu.style.display = "none";
        h1.style.display = "inline-block";
        spanToHide.classList.remove("small-navigation__span_hidden");
        spans[0].classList.remove("small-navigation__span_rotate-right");
        spans[2].classList.remove("small-navigation__span_rotate-left");
    }
};

// create modal images of works
let contentWorkContainers = document.querySelectorAll(".content__work-container");
let numberOfContentWorks = contentWorkContainers.length;

contentWorkContainers.forEach( (container, i) => {
    // skip the last container, because it has no image
    if (i == numberOfContentWorks - 1) return;

    createModalImageDiv(container);
    hangEventsOnModalImageDiv(container);
});

// if (NODE_ENV == "development") {
//     console.log("Включен development!!");
// } 