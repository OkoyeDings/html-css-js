function copyMenu(){
    var dptCategory = document.querySelector(".dpt-cat");
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;

    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;

    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;  
}
copyMenu();

//show mobile menu
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addclass = document.querySelector('.site');
menuButton.addEventListener('click', function(){
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
    addclass.classList.remove('showmenu')
})


// showing sub menu
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item  != this ? item.closest('.has-child').classList.remove('expand') : null);

    if(this.closest('.has-child').classList !=  'expand');
    this.closest('.has-child').classList.toggle('expand')
}

const searchButton = document.querySelector('.t-search');
const tClose = document.querySelector('.search-close');
const showClass = document.querySelector('.site');
searchButton.addEventListener('click', function(){
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function(){
    showClass.classList.remove('showsearch')
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 0,
    grabCursor:true,
    center:true,
    autoplay:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
   
});
  



// 1:59:24