let eye = document.querySelector("#eye");
let password = document.querySelector("#password");

eye.addEventListener("click",function(){
    if(password.type == "password"){
        password.type = "text";
        eye.src= "images/eye-open.png";
    }else{
        password.type ="password";
        eye.src= "images/eye-close.png"
    }
})