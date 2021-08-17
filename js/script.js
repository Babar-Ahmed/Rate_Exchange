const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencytwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//fetch api 
function  calculate() {
	const crncy_one = currencyOne.value;
	const crncy_two =currencytwo.value;

fetch(`https://api.exchangerate.host/latest ${crncy_one}`)
	.then(res => res.json())
	.then(data=>{
		//console.log(data);
		const rate = data.rates[crncy_two];
		//console.log(rate);
		rateEl.innerText = ` 1 ${crncy_one} = ${rate} ${crncy_two}`;
		amountTwo.value = (amountOne.value * rate).toFixed(2);
	});
}//end of calculate func
	

	//Eventlistener
	currencyOne.addEventListener('change',calculate);
	amountOne.addEventListener('input',calculate);

	currencytwo.addEventListener('change',calculate);
	amountTwo.addEventListener('input',calculate);

swap.addEventListener('click', ()=>{
	const temp= currencyOne.value;
	currencyOne.value = currencytwo.value;
	currencytwo.value = temp;
	calculate();
})
calculate();