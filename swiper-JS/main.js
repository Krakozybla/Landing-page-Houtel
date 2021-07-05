const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-prev',
      prevEl: '.slider-button-next',
    },
    //effect: 'cube',
  });

let menu = document.querySelector('.header-bottom');
let menuBtn = document.querySelector('.mobile-menu');
menuBtn.addEventListener('click', ()=>{
  menu.classList.toggle('header-bottom__visible');
})
