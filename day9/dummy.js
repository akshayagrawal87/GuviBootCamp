var result = 0;
var display = document.querySelector(".calc-display");
var def = true;
var lastOperation = undefined;

try {
	function displayed(event) {
		display.innerText = result;
	}

	document.addEventListener("keyup", function (event) {
		event.preventDefault();
		console.log(event.keyCode);
		let x = +String.fromCharCode(event.keyCode);
		if (x >= 0 && x <= 9) {
			if (lastOperation === undefined) {
				if (def === true) {
					result = "";
					display.innerText = "";
					def = false;
				}
				//A nine digit calculator
				if (display.innerText.split("").length < 9) {
					result += String.fromCharCode(event.keyCode);
					display.innerText = result;
				}
			} else {
				if (def === true) temp = result;
				console.log("last result" + temp);
				if (def === true) {
					result = "";
					display.innerText = "";
					def = false;
				}
				//A nine digit calculator
				if (display.innerText.split("").length < 9) {
					result += String.fromCharCode(event.keyCode);
					display.innerText = result;
				}
			}
		}
	});

	//Functions to add,sub,mul,div,mod

	let operation = {};
	operation["add"] = function addition(a, b) {
		return a + b;
	};
	operation["sub"] = function subtraction(a, b) {
		return a - b;
	};
	operation["mul"] = function muliplication(a, b) {
		return a * b;
	};
	operation["div"] = function division(a, b) {
		return a / b;
	};
	operation["mod"] = function modulus(a, b) {
		return a % b;
	};

	//Function to clear the display and memory
	var clear = function (event) {
		event.preventDefault();
		display = document.querySelector(".calc-display");
		display.innerText = "0";
		result = 0;
		def = true;
	};

	var putValue = function (num) {};

	var $clear = document.querySelector(".clear");

	$clear.addEventListener("click", clear);

	var numbers = document.querySelectorAll(".number");

	var temp;

	for (let i = 0; i < numbers.length; i++) {
		// console.log(numbers[i].addEventListener("click", putValue(numbers[i].value)));

		numbers[i].addEventListener("click", (event) => {
			event.preventDefault();
			if (lastOperation === undefined) {
				if (def === true) {
					result = "";
					display.innerText = "";
					def = false;
				}
				//A nine digit calculator
				if (display.innerText.split("").length < 9) {
					result += numbers[i].value;
					display.innerText = result;
				}
			} else {
				if (def === true) temp = result;
				console.log("last result" + temp);
				if (def === true) {
					result = "";
					display.innerText = "";
					def = false;
				}
				//A nine digit calculator
				if (display.innerText.split("").length < 9) {
					result += numbers[i].value;
					display.innerText = result;
				}
			}
		});
	}

	var $equal = document.querySelector(".result");
	$equal.addEventListener("click", (event) => {
		event.preventDefault();
		if (lastOperation !== undefined) {
			console.log(operation[lastOperation](+result, +temp));
			display.innerText = operation[lastOperation](+temp, +result);
			result = display.innerText;
			lastOperation = undefined;
		}
	});

	var operators = document.querySelectorAll(".operator");

	for (let i = 0; i < operators.length; i++) {
		operators[i].addEventListener("click", (event) => {
			event.preventDefault();
			lastOperation = operators[i].value;
			def = true;
			console.log(lastOperation);
		});
	}
} catch (err) {
	display.innerText = err;
}
