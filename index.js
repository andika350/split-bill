const billTotal = document.getElementById('bill-input');
const tipPercent = document.getElementById('tip-percentage');
const plusBtn = document.getElementById('plus-btn');
const minusBtn = document.getElementById('minus-btn');
const personEl = document.getElementById('person').innerText;
const totalEl = document.getElementById('total-amount');

console.log(personEl);

//Add or decrease people count
plusBtn.onclick = () => {
  personEl.innerText =+ 1;
} 