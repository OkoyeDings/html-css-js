const btn = document.querySelectorAll(".tab-btn")
const about = document.querySelector(".about")
const art = document.querySelectorAll(".content")

about.addEventListener("click",function(e){
    const id = e.target.dataset.id;
    if(id){
        btn.forEach(function(btns){
            btns.classList.remove("active")
            e.target.classList.add("active")
        })
        art.forEach(function(a){
            a.classList.remove("active")
        })
        const element = document.getElementById(id)
        element.classList.add("active")
    }
})