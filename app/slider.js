
const slides = document.querySelectorAll('.slide-photo');
const next = document.querySelector('#button-right');
const prev = document.querySelector('#button-left');
const auto = false;
const interval = 5000;

const nextSlide = () => {
    // get current class
    const current = document.querySelector('.current');
    // remove current class
    current.classList.remove('current');
    // 
}