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
    if(curPicture != pictureNumber){
        switch(curPicture){
            case 1:
                dotOne.classList.remove('dot-selected');
                break;
            case 2:
                dotTwo.classList.remove('dot-selected');
                break;
            case 3:
                dotThree.classList.remove('dot-selected');
                break;
            case 4:
                dotFour.classList.remove('dot-selected');
                break;
            case 5:
                dotFive.classList.remove('dot-selected');
                break;
        }
        switch(pictureNumber){
            case 1:
                dotOne.classList.add('dot-selected');
                break;
            case 2:
                dotTwo.classList.add('dot-selected');
                break;
            case 3:
                dotThree.classList.add('dot-selected');
                break;
            case 4:
                dotFour.classList.add('dot-selected');
                break;
            case 5:
                dotFive.classList.add('dot-selected');
                break;
        }
    }
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