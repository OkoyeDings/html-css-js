//..........login email.......//
var myForms= document.forms.login;
var message=document.getElementById("message");
var email = document.getElementById('email');

myForms.onsubmit = () => {

    if (myForms.email.value === "Okoyedindu@gmail.com") {
    } 
    else {
        message.innerHTML = "This email or password is invalid";
        message.style.color = "red";
        email.classList.add('invalid')
        setTimeout(function(){
            email.classList.remove('invalid')
            message.innerHTML = '';
        }, 2000)
        return false;  
    }
};

