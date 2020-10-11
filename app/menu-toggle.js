

const menuToggle = document.querySelector('.toggler');
const menuClose = document.querySelector('.cross-close');
const menuList = document.querySelector('.menu-list');

menuToggle.addEventListener('click', () => {
    menuList.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menuList.classList.remove('active');
})

