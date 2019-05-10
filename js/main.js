var num = document.querySelector('input');
var result = document.querySelector('h1');
var plusBtn = document.querySelector('#plus');
var minusBtn = document.querySelector('#minus');
plusBtn.addEventListener('click', addNum);
minusBtn.addEventListener('click', subNum);


var total = 0;

function addNum() {
    total += parseInt(num.value);
    displayTotal();
}

function subNum() {
    total -= parseInt(num.value);
    displayTotal();
}

function displayTotal() {
    total >= 0 ?
    (result.textContent = total, result.style.color = 'black') 
    :
    (result.textContent = total, result.style.color = 'red');
}