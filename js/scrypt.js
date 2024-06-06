const slides = document.querySelectorAll('.latest-collection-slide');
const btnPrev = document.querySelector('.buttonPrev');
const btnNext = document.querySelector('.buttonNext');

let main_slide = 1;

btnPrev.addEventListener('click', handleClickPrevBtn);
btnNext.addEventListener('click', handleClickNextBtn);

function handleClickPrevBtn (event) {
    slides[main_slide].classList.remove('active');
    if (main_slide != 0) {
        main_slide--;
    }           
    slides[main_slide].classList.add('active')
}

function handleClickNextBtn (event) {
    slides[main_slide].classList.remove('active');
    if (main_slide < slides.length) {
        main_slide++;
    }           
    slides[main_slide].classList.add('active')
}

document.addEventListener('DOMContentLoaded', function() {
    var burgerButton = document.querySelector('.burger');
    var menu = document.querySelector('.menu');

    burgerButton.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });
});