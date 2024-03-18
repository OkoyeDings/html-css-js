let toastBox = document.querySelector('#toastBox');
let successMeg = '<i class="fa-solid fa-circle-check"></i> successfully submitted';
let errorMeg = '<i class="fa-solid fa-triangle-exclamation"></i> Please fix the error!';
let invalidMeg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again';

function showToast(msg){
  let toast =  document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = msg;

  toastBox.appendChild(toast);

  if(msg.includes('error')){
    toast.classList.add('error');
  }

  if(msg.includes('Invalid')){
    toast.classList.add('Invalid');
  }

  setTimeout(()=>{
    toast.remove()
  },6000);
}