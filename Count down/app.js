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

let future = new Date(2023,2,19,17,30,0);

const year = future.getFullYear();
const hours = future.getHours();
const mins = future.getMinutes();
const secs = future.getSeconds();
const date= future.getDate();

let month = future.getMonth();

const weekday = weekdays[future.getDay()];


giveAway.textContent = `giveaway ends on ${weekday},  ${year} ${date}  ${months[month]} ${hours}:${mins}am `;

const futureTime = future.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24 *60*60*1000;
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

    // if(t < 0){
    //     clearInterval(countDown);
    //     deadLine.innerHTML= `<h4 class="done">Sorry , The giveaway is over</h4>`
    // }
}

let countDown = setInterval(getRemainingTime,1000);

getRemainingTime();