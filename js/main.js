const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body  = document.body;


// Клик по кнопке
// событие клик //2аргумента:отслеживаем-клик;ф-я которая будет запуск-ся
navBtn.addEventListener('click', function (event) {   //toggle-добавлять,удалять
    event.stopPropagation();
    toggleMobileNav();
})

// Клик по окну за пределами навигации
window.addEventListener('click', function () {
    // открыта ли наша навигация
    if( body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
})

// Останавливаем клик внутри открытой мобильной навигации
mobileNav.addEventListener('click', function (event) {
    event.stopPropagation() //остановить передачу этого события
})

function toggleMobileNav() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close'); /*крестик-бургер*/
    body.classList.toggle('no-scroll');
}