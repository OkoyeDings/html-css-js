const review = [
    {
        id:1,
        name:"Okoye Dings",
        job:"Web developer",
        img:"../codes/image/carton.png",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quia, temporibus consectetur cumque facere officiis quidem culpa aliquid in, distinctio reprehenderit molestiae necessitatibus repellendus ipsam doloribus incidunt deleniti soluta iusto.",
    },
    {
        id:2,
        name:"Mark Jimmy",
        job:"Web developer",
        img:"../codes/image/6233787.jpg",
        text:"Tolestiae Lorem ipsum dolor sitamet consectetur adipisicing elit.Sit quia,temporibus reprehenderinecessitatibus repellendus ipsam doloribus inciduntconsectetur cumque facere officiis quidem culpa aliquid in, distinctio deleniti soluta iusto.",
    },
    {
        id:3,
        name:"Obinna Paul",
        job:"Game developer",
        img:"../codes/image/bad monalisa.jpg",
        text:" Incidunt deleniti soluta iustoadipisicing elit Sit quia, temporibus consectetur cumque facere officiis quidem culpa aliquid in, distinctio reprehenderit molestiae necessitatibus Lorem ipsum dolor sit amet consectetur repellendus ipsam doloribus.",
    },
    {
        id:4,
        name:"Mark Jimmy",
        job:"Graphic designer",
        img:"../codes/image/carton1.jpg",
        text:"Lorem  reprehenderit molestiae necessitatibus repellendus ipsam doloribus incidunt Sit quia, temporibus consectetur cumque facere officiis quidem culpa  deleniti  ipsum dolor sit amet consectetur adipisicing elit. aliquid in, distinctiosoluta iusto.",
    },
    {
        id:5,
        name:"Tom Ford",
        job:"Content creator",
        img:"../codes/image/bad monalisa.jpg",
        text:"Consectetur cumque facere officiis quidem culpa aliquid in, distinctio Lorem ipsum dolor sit amet consectetur adipisicing elit Sit quia, temporibus  reprehenderit molestiae necessitatibus repellendus ipsam doloribus incidunt deleniti soluta iusto.",
    }
]

const img = document.getElementById('person-1');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded',function(){
   showPerson(currentItem)
})

function showPerson(person){
    const item = review[person];
    img.src = item.img;
    author.textContent= item.name;
    job.textContent= item.job;
    info.textContent= item.text
}

nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > review.length -1){
        currentItem = 0;
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0 ){
        currentItem= review.length -1
    }
    showPerson(currentItem)
})

randomBtn.addEventListener('click', function(){
    currentItem = getRandom()
    showPerson(currentItem)
})

function getRandom (){
    return Math.floor(Math.random()*review.length);
}