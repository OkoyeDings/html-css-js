    var menu= document.getElementById("menu");
    var click= document.getElementById("click");
    click.onclick = function(){

    if(menu.className=="open"){
        menu.className="";
        click.innerHTML="<i class='fas fa-navicon fa-2x'></i>"
    }else{
        menu.className ="open";
        click.innerHTML ="<i class='fas fa-xmark fa-3x'></i>"
        click.style.color ="white";
    }
   }

    $(".hide").on("click" , function(){
    $(".messages").slideToggle()

    });


    //CHANGING QUOTE

    var allQ = $("blockquote");
    var currentQ = 0;

    function changeQ(){

        $(allQ[currentQ]).fadeOut(800 , function(){

            if(currentQ === (allQ.lenght = 2)){
                currentQ  = 0;
            }else{
                currentQ++;
            }
            $(allQ[currentQ]).fadeIn(800);

        })
     
    }
    var qTimer = setInterval(changeQ , 3000);  
   


//slide down
var item =$(".acc-log-a");
item.on("click", function(){

    $(this).find("p").slideToggle(500);

})
var item =$(".acc-log-b");
item.on("click", function(){

    $(this).find("p").slideToggle(500);

})
var item =$(".acc-log-c");
item.on("click", function(){

    $(this).find("p").slideToggle(500);

})

//book list
const bookList= document.querySelector('#booklist');
const add= document.querySelector('#add');
const unorder= document.querySelector('ul');
const message=document.querySelector('.message');

add.addEventListener("click", function(){

    if(bookList.value===""){
        message.innerHTML="Please fill add a book";
        message.style.color="red";
        setTimeout(function(){
           message.innerHTML="" ;
        },3000)  
        return false; 
    }else{
        message.innerHTML="";
    }

    const listItem= document.createElement('li');
    const remove= document.createElement('input');

    listItem.textContent= `${bookList.value}`;
    listItem.className="name";

    remove.type= 'button';
    remove.value = 'Remove';
    remove.className="delete";

    listItem.appendChild(remove);
    unorder.appendChild(listItem);
   
    bookList.value= '';

    remove.addEventListener('click', () => {
    unorder.removeChild(listItem);
    });
    
});

