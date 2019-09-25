"use strict";

// write a h1 at DOMContentLoaded event
function writeH1LetterByLetter(permanentH1Class) {
    var requiredH1Text = "@anxoret.dev";
    var h1 = document.querySelector("." + permanentH1Class);

    var arrayOfLettersOfH1 = requiredH1Text.split("");

    var innerTextInH1 = "";

    var i = 0;

    var callIntervalFunction = setInterval(writeText, 120);

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

document.addEventListener("DOMContentLoaded", writeH1LetterByLetter("header__h1_blue-grey-theme"));

// hide and show spans in h2
function showOrHideClassOfElementsInDOM(permanentClassOfTheElements, hidingClassOfTheElements) {
    var elementsToShowOrHide = document.querySelectorAll("." + permanentClassOfTheElements);

    elementsToShowOrHide.forEach(function (element) {
        if (element.classList.contains(hidingClassOfTheElements)) {
            element.classList.remove(hidingClassOfTheElements);
        } else {
            element.classList.add(hidingClassOfTheElements);
        }
    });
};

setInterval(function () {
    showOrHideClassOfElementsInDOM("content__span_blue-grey-theme", "content__span_hidden");
}, 1000);

// open and close a small navigation menu
function openOrHideSmallNavigationMenu() {
    var smallNavigationMenu = document.querySelector(".small-navigation__menu_blue-grey-theme");
    var h1 = document.querySelector(".header__h1_blue-grey-theme");
    var spans = document.querySelectorAll(".small-navigation__span_blue-grey-theme");
    var spanToHide = spans[1]; // hide second span from DOM (in small navigation button)

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
