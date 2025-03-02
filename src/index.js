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
    pictureHolder.classList.remove(`picture-holder-${curPicture}`);
    pictureHolder.classList.add(`picture-holder-${pictureNumber}`);
    curPicture = pictureNumber;
}

leftArrow.addEventListener('click', () =>{
    if(curPicture != 1){
        let newPicture = curPicture - 1;
        changePicture(newPicture);
    }
});

rightArrow.addEventListener('click', () =>{
    if(curPicture != 5){
        let newPicture = curPicture + 1;
        changePicture(newPicture);
    }
});