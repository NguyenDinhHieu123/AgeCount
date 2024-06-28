'use strict'

const submit = document.querySelector('.submit-btn');
const ageout  = document.querySelector('.age-out');
const reset =document.querySelector('.reset');

submit.addEventListener('click',function(){
    const age = Number(document.querySelector('.age-input').value);
    ageout.textContent = age;
  
})
reset.addEventListener('click',function(){
    document.querySelector('.age-input').value = " ";
    ageout.textContent = " ";
})