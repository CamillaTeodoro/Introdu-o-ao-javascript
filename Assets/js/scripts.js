let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	updatecolor();
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	updatecolor();
}

function updatecolor() {
	if (count < 0) {
		CURRENT_NUMBER.style.color = 'red';
	}
	else { CURRENT_NUMBER.style.color = 'black' }
}

