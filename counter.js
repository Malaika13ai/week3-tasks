const count = document.getElementById('count');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');


let counter = 0;

increase.addEventListener('click',()=>{
    count.textContent = ++counter;
});

decrease.addEventListener('click',()=>{
    count.textContent = --counter;
});

reset.addEventListener('click',()=>{
    counter = 0;
    count.textContent = counter;
});
