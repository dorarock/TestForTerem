//Задание 2.1
const header = document.querySelector('.header');
const buttonOne = document.querySelector('.btn-warning');

let showHideHeader = () => {
    console.log(header);
    console.log('cl');
    if(header.style.display !== 'none') {
        header.style.display = 'none';
        buttonOne.className = 'btn btn-danger'
    } else {
        header.style.display = 'block';
        buttonOne.className = 'btn btn-warning'
    }
}

buttonOne.addEventListener("click", showHideHeader);

//Задание 2.2
const buttonTwo = document.querySelector('.btn-success');
const middleDiv = document.querySelector('.leftDiv');
const leftDiv = document.querySelector('.middleDiv');


let changePlace = () => {
    console.log(buttonTwo);
    console.log(middleDiv);
    console.log(leftDiv);
    if(middleDiv.style.order !== '2' && leftDiv.style.order !== '1'){
        middleDiv.style.order = '2';
        leftDiv.style.order = '1';
        buttonTwo.className = 'btn btn-danger'
    } else {
        middleDiv.style.order = '1';
        leftDiv.style.order = '2';
        buttonTwo.className = 'btn btn-success'
    }
}

buttonTwo.addEventListener("click", changePlace);

//Задание 2.3. Модальное окно

const modalFade = document.querySelector('.popup-fade');
const modalWindow = document.querySelector('.popup');
const closeModal = document.querySelector('.popup-close');
console.log(modalFade);
console.log(modalWindow);
console.log(closeModal);

let closeModalWindow = () => {
    if(modalFade.style.display !== 'none' && modalWindow.style.display !== 'none') {
        modalFade.style.display = 'none';
        modalWindow.style.display = 'none';

    } 
}

closeModal.addEventListener('click', closeModalWindow);
modalFade.addEventListener('click', closeModalWindow);