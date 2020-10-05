//Function to define Conatiner.row and Auto center for calculator.
(() => {
	//Conatiner Class
	let div = document.createElement("div");
	div.classList.add("container");
	document.body.appendChild(div);

	let row = document.createElement("div");
	row.classList.add(
		"row",
		"justify-content-md-center",
		"justify-content-center"
	);
	div.appendChild(row);

	let col1 = document.createElement("div");
	col1.classList.add("col-2");
	//col1.innerText = "hi";
	let col2 = document.createElement("div");
	col2.classList.add("col-md-auto", "align-self-center");
	col2.setAttribute("id", "calculator");
	//col2.innerText = "hi";
	let col3 = document.createElement("div");
	col3.classList.add("col-2");
	//col3.innerText = "hi";
	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);
})();

(() => {
	let calculator = document.querySelector("#calculator");
	let row = document.createElement("div");
	row.classList.add("row");
})();
