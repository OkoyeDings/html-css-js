 let count = 0

const value = document.querySelector('#value')
const btn = document.querySelectorAll('.btn')

btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
            if(count < 0){
                value.style.color='red';
            }
        }
        else if(style.contains('increase')){
            count++;
            if(count > 0){
                value.style.color='green';
            }
        }
        else if(style.contains('reset')){
            count=0;
            value.style.color='black';
        }
        value.textContent= count
    })
})