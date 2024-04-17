let searchFrom = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchFrom.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    bar.classList.remove('active');
}

let shoppingCart  = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');
    searchFrom.classList.remove('active');
    bar.classList.remove('active');
}

let loginForm  = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    bar.classList.remove('active');
}

let bar  = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    bar.classList.toggle('active');
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchFrom.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchFrom.classList.remove('active');
    bar.classList.remove('active');
}