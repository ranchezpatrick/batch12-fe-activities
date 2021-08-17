const hamburger = document.querySelector('.header .nav-bar .nav-link .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-link ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll', ()=> {
    var scroll_position= window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#ff8700";
    } else {
        header.style.backgroundColor = 'transparent';
    }
})