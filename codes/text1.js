//jqurey
var myForms= document.forms.login;
var message=document.getElementById("message");

myForms.onsubmit= function(){

    if(myForms.username.value==="okoyedindu@gmail.com"){ 
    }else{
        message.innerHTML="This email or password is invalid";
        message.style.color="red";
        return false;   
     }
};

