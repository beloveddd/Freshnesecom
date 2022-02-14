(function() {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header___menu-main');
    const menuCloseItem = document.querySelector('.header___nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header___menu-main_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header___menu-main_active');
    });
}());