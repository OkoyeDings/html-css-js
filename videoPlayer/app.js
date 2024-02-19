const btn = document.querySelector(".play")
const btn2 = document.querySelector(".pause")
const video = document.querySelector(".video-container")

btn2.addEventListener('click', function(){
    video.pause();
})
btn.addEventListener('click', function(){
    video.play();
})

const preLoader = document.querySelector(".pre_loader");

window.addEventListener("load", function(){
    preLoader.classList.add("hide")
})