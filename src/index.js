import "./styles.css";

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const dotOne = document.querySelector('.dot-1');
const dotTwo = document.querySelector('.dot-2');
const dotThree = document.querySelector('.dot-3');
const dotFour = document.querySelector('.dot-4');
const dotFive = document.querySelector('.dot-5');
const pictureHolder = document.querySelector('.picture-holder');
let curPicture = 1;

function changePicture(pictureNumber){
    pictureHolder.removeAttribute('class');
    pictureHolder.classList.add('picture-holder');
    switch(pictureNumber){
        case 1:
            pictureHolder.classList.add('picture-holder-1');
            break;
        case 2:
            pictureHolder.classList.add('picture-holder-2');
            break;
        case 3:
            pictureHolder.classList.add('picture-holder-3');
            break;
        case 4:
            pictureHolder.classList.add('picture-holder-4');
            break;
        case 5:
            pictureHolder.classList.add('picture-holder-5');
            break;
    }
}