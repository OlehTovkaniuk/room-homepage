
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#button-left');
const nextBtn = document.querySelector('#button-right');
const auto = true;
const intervalTime = 7000;
let slideInterval;


const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    };
}

const prevSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slides[slides.length - 1].classList.add('current');
    }
}

// button events

nextBtn.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prevBtn.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
})

//  Auto slide

if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}