const btn = document.getElementById("btn");
const links = document.querySelector(".links");
const nav = document.querySelector(".nav-center")

btn.addEventListener("click",function(){
   if(links.classList.contains("open")){
        links.classList.remove("open")
   }else{
    links.classList.add("open")
   }
})

const date = document.querySelector(".date");
date.innerHTML=new Date().getFullYear();

const navBar = document.querySelector(".nav-center")
const topLink = document.querySelector(".top-link")

window.addEventListener("scroll",function(){
   const scroll = document.querySelectorAll(".scrool-link")
   const scrollHeight = window.pageYOffset;
   const navHeight = navBar.getBoundingClientRect().height

   if(scrollHeight > navHeight){
      navBar.classList.add("fixed-nav")
   }
   else{
      navBar.classList.remove("fixed-nav")
   }

   if(scrollHeight > 500){
      topLink.classList.add("visibule")
      scroll.forEach
   }
   else{
      topLink.classList.remove("visibule")
   }
})

