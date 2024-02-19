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

const bate = document.querySelector(".date");
bate.innerHTML=new Date().getFullYear();

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

const scrollLink = document.querySelectorAll(".scrool-link")
scrollLink.forEach(function(link){
   link.addEventListener("click",function(e){
      e.preventDefault();
      links.classList.remove("open")
      const id = e.currentTarget.getAttribute("href").slice(1);
      const element = document.getElementById(id);

      const navHeight= navBar.getBoundingClientRect().height;
      const containerHeight = links.getBoundingClientRect().height
      const fixedNav = navBar.classList.contains("fixed-nav")

      let posision = element.offsetTop - navHeight;
      window.scrollTo({
         left:0,
         top:posision,
      })
   })
})


const months =[
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "Jury",
   "August",
   "September",
   "October",
   "Novemmber",
   "December"
];

const weekdays = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
]

const giveAway =document.querySelector(".giveaway");
const deadLine = document.querySelector(".deadline");
const item = document.querySelectorAll(".deadline-format h4");

let future = new Date(2023,7,23,17,30,0);

const year = future.getFullYear();
const hours = future.getHours();
const mins = future.getMinutes();
const secs = future.getSeconds();
const date= future.getDate();

let month = future.getMonth();

const weekday = weekdays[future.getDay()];


const futureTime = future.getTime();

function getRemainingTime(){
   const today = new Date().getTime();
   const t = futureTime - today;

   const oneDay = 24*60*60*1000;
   const oneHour = 60*60*1000;
   const oneMin = 60*1000;
   const oneSec = 1000;

   let days = Math.floor(t/oneDay);
   let hours = Math.floor((t % oneDay)/oneHour);
   let mins = Math.floor((t % oneHour)/oneMin);
   let secs = Math.floor((t % oneMin)/oneSec);

   const values = [days,hours,mins,secs];

   function format (items){
       if (items < 10){
           return items = `0${items}`
       }else {
           return items
       }
   }
   
   item.forEach(function(items,index){
       items.innerHTML = format(values[index])
   });

   if(t < 0){
       clearInterval(countDown);
       deadLine.innerHTML= `<h4 class="done">The conference has begun</h4>`
   }
}

let countDown = setInterval(getRemainingTime,1000);

getRemainingTime();


const sig = document.querySelector(".sig");
const cancle = document.querySelector(".cancle");
const reg = document.querySelector(".reg");

reg.addEventListener( "click", function(){
  sig.classList.add("open")
})

cancle.addEventListener("click",function(){
    sig.classList.remove("open")
})


