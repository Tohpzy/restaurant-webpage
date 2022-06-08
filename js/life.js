let menu = document.querySelector('#menu_bars');
let navbar = document.querySelector('nav');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search_icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
    // document.querySelector('#search-form').style.top = '0';
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
    // document.querySelector('#search-form').style.top = '-110%';
}


// swiper section 

// let swiper = new swiper(".home-slider", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//         delay: 7500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     loop: true,
// });