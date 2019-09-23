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

document.addEventListener("DOMContentLoaded", writeH1LetterByLetter("header__h1_blue-grey-theme"));

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
