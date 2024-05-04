let navBar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick = () =>{
    navBar.classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    navBar.classList.remove('active');
}

window.onscroll = () =>{
    if(window.scrollY  > 100){
        document.querySelector('header').classList.add('active');
        navBar.classList.remove('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-moon');
    themeToggler.classList.toggle('fa-sun');
    if( themeToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }else{
        document.querySelector('body').classList.remove('active');
    }
}

var swiper = new Swiper(".product-slider", {
    slidesPerView:3,
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        550:{
            slidesPerView:2,
        },
        800:{
            slidesPerView:3,
        },

    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });