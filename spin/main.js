let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000 + 1000);
let currentValue = 0; // Track the current value


btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	console.log(number);
	this.onclick = null;
	
	// Calculate the corresponding value on the clock face (1 to 8)
	let clockValue = number % 360;
	console.log(clockValue);
	if (clockValue >= 25 && clockValue < 70) {
		currentValue = 8;
	} else if (clockValue >= 70 && clockValue < 115) {
		currentValue = 7;
	} else if (clockValue >= 115 && clockValue < 160) {
		currentValue = 6;
	} else if (clockValue >= 160 && clockValue < 205) {
		currentValue = 5;
	} else if (clockValue >= 205 && clockValue < 250) {
		currentValue = 4;
	} else if (clockValue >= 250 && clockValue < 295) {
		currentValue = 3;
	} else if (clockValue >= 295 && clockValue < 340) {
		currentValue = 2;
	} else currentValue = 1;

	console.log(currentValue);

	// Display the result
	let resultElement = document.querySelector(".result");
	resultElement.textContent = "12시 방향 값: " + currentValue;

}
