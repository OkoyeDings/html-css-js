const openBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.fa-times');
const popUp = document.querySelector('.modal-overlay')

openBtn.addEventListener('click', function(){
    popUp.classList.add('show')
})

closeBtn.addEventListener('click',function(){
    popUp.classList.remove('show')
})