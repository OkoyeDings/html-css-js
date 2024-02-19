const menu = [
    {
        id: 1,
        title:"Buttermilk pancakes",
        category:"Breakfast",
        price:15.19,
        img:"../codes/image/128139.jpg",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt consequatur molestias ipsam earum nesciunt ducimus sapiente provident similique pariatur impedit"
    },
    {
        id: 2,
        title:"Double Cakes",
        category:"Lunch",
        price:13.20,
        img:"../codes/image/7794856.jpg",
        desc:"Lorem  Incidunt consequatur molestias ipsam earum nesciunt sit, amet consectetur adipisicing elit.  ducimus sapiente provident similique pariatur impedit ipsum dolor"
    },
    {
        id: 3,
        title:"Chocolate MilkShake",
        category:"Dinner",
        price:20.10,
        img:"../codes/image/carton2.png",
        desc:"Autr ducimus sapiente provident similique pariatur impedit ipsum dolor. Lorem  Incidunt consequatur molestias ipsam earum nesciunt sit, amet consectetur adipisicing elit"
    },
    {
        id: 4,
        title:"Cake and Coke",
        category:"Breakfast",
        price:10.00,
        img:"../codes/image/bad monalisa.jpg",
        desc:" Ipsum dolorAutr ducimus sapiente provident similique pariatur impedit Lorem  Incidunt consequatur molestias ipsam earum nesciunt sit, amet consectetur adipisicing elit"
    },
    {
        id: 5,
        title:"Chicken peper soup",
        category:"Lunch",
        price:17.09,
        img:"../codes/image/2fe995e330aa6168b5c61817b947b1604e69afae.jpg",
        desc:"  Incidunt consequatur molestias ipsam earum nesciunt sit, amet consectetur Ipsum dolorAutr ducimus sapiente provident similique pariatur impedit Lorem adipisicing elit"
    },
    {
        id: 6,
        title:"Eba and Vegetable soup",
        category:"Dinner",
        price:12.22,
        img:"../codes/image/carton1.jpg",
        desc:"Amet consectetur Ipsum dolorAutr ducimus sapiente provident similique pariatur Incidunt consequatur molestias ipsam earum nesciunt sit, impedit Lorem adipisicing elit"
    }

]

const sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded",function(){
    let displayMenu = menu.map(function(item){
        return `<article class="menu-item">
        <img src="${item.img}" class="photo" alt="${item.title}">
        <div class="item-info">
           <header>
            <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
           </header>
           <p class="item-text">${item.desc}</p>
        </div>
    </article>`
    });
    displayMenu = displayMenu.join("")
    sectionCenter.innerHTML = displayMenu
})