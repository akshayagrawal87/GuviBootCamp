(() => {
	let main = document.createElement("main");
	document.body.appendChild(main);

	let container = document.createElement("div");
	container.classList.add("container");
	main.appendChild(container);

	let row = document.createElement("div");
	row.classList.add("row", "justify-content-center");
	container.appendChild(row);

	let col1 = document.createElement("div");
	col1.classList.add("col-lg");
	row.appendChild(col1);

	let col2 = document.createElement("div");
	col2.classList.add("col-lg");
	col2.setAttribute("id", "calculator");
	row.appendChild(col2);

	let h1 = document.createElement("h1");
	h1.innerText = "Calculator";
	col2.appendChild(h1);

	let calcDisplay = document.createElement("div");
	calcDisplay.classList.add("calc-display");
	calcDisplay.innerText = "0";
	col2.appendChild(calcDisplay);

	let calcKeyBoard = document.createElement("div");
	calcKeyBoard.classList.add("calc_keyboard");
	col2.appendChild(calcKeyBoard);

	let rowKeyBoard = document.createElement("div");
	rowKeyBoard.classList.add("row");
	calcKeyBoard.appendChild(rowKeyBoard);

	let rowKeyBoardCol = document.createElement("div");
	rowKeyBoardCol.classList.add("col");
	rowKeyBoard.appendChild(rowKeyBoardCol);

	let rowKeyBoardColRow1 = document.createElement("div");
	rowKeyBoardColRow1.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow1);

	let rowKeyBoardColRow2 = document.createElement("div");
	rowKeyBoardColRow2.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow2);

	let rowKeyBoardColRow3 = document.createElement("div");
	rowKeyBoardColRow3.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow3);

	let rowKeyBoardColRow4 = document.createElement("div");
	rowKeyBoardColRow4.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow4);

	let rowKeyBoardColRow5 = document.createElement("div");
	rowKeyBoardColRow5.classList.add("row");
	rowKeyBoardCol.appendChild(rowKeyBoardColRow5);

	let row1ButtonClear = document.createElement("button");
	row1ButtonClear.classList.add("col-6", "clear", "btn", "btn-dark");
	row1ButtonClear.setAttribute("type", "button");
	row1ButtonClear.setAttribute("value", "clear");
	row1ButtonClear.innerText = "C";
	rowKeyBoardColRow1.appendChild(row1ButtonClear);

	let row1ButtonMod = document.createElement("button");
	row1ButtonMod.classList.add("col", "operator", "btn", "btn-dark");
	row1ButtonMod.setAttribute("type", "button");
	row1ButtonMod.setAttribute("value", "mod");
	row1ButtonMod.innerText = "%";
	rowKeyBoardColRow1.appendChild(row1ButtonMod);

	let row1ButtonDiv = document.createElement("button");
	row1ButtonDiv.classList.add("col", "operator", "btn", "btn-dark");
	row1ButtonDiv.setAttribute("type", "button");
	row1ButtonDiv.setAttribute("value", "div");
	row1ButtonDiv.innerText = "/";
	rowKeyBoardColRow1.appendChild(row1ButtonDiv);

	let row2Button7 = document.createElement("button");
	row2Button7.classList.add("col", "number", "btn", "btn-dark");
	row2Button7.setAttribute("type", "button");
	row2Button7.setAttribute("value", "7");
	row2Button7.innerText = "7";
	rowKeyBoardColRow2.appendChild(row2Button7);

	let row2Button8 = document.createElement("button");
	row2Button8.classList.add("col", "number", "btn", "btn-dark");
	row2Button8.setAttribute("type", "button");
	row2Button8.setAttribute("value", "8");
	row2Button8.innerText = "8";
	rowKeyBoardColRow2.appendChild(row2Button8);

	let row2Button9 = document.createElement("button");
	row2Button9.classList.add("col", "number", "btn", "btn-dark");
	row2Button9.setAttribute("type", "button");
	row2Button9.setAttribute("value", "9");
	row2Button9.innerText = "9";
	rowKeyBoardColRow2.appendChild(row2Button9);

	let row2ButtonMul = document.createElement("button");
	row2ButtonMul.classList.add("col", "operator", "btn", "btn-dark");
	row2ButtonMul.setAttribute("type", "button");
	row2ButtonMul.setAttribute("value", "mul");
	row2ButtonMul.innerText = "*";
	rowKeyBoardColRow2.appendChild(row2ButtonMul);

	let row3Button4 = document.createElement("button");
	row3Button4.classList.add("col", "number", "btn", "btn-dark");
	row3Button4.setAttribute("type", "button");
	row3Button4.setAttribute("value", "4");
	row3Button4.innerText = "4";
	rowKeyBoardColRow3.appendChild(row3Button4);

	let row3Button5 = document.createElement("button");
	row3Button5.classList.add("col", "number", "btn", "btn-dark");
	row3Button5.setAttribute("type", "button");
	row3Button5.setAttribute("value", "5");
	row3Button5.innerText = "5";
	rowKeyBoardColRow3.appendChild(row3Button5);

	let row3Button6 = document.createElement("button");
	row3Button6.classList.add("col", "number", "btn", "btn-dark");
	row3Button6.setAttribute("type", "button");
	row3Button6.setAttribute("value", "6");
	row3Button6.innerText = "6";
	rowKeyBoardColRow3.appendChild(row3Button6);

	let row3ButtonSub = document.createElement("button");
	row3ButtonSub.classList.add("col", "operator", "btn", "btn-dark");
	row3ButtonSub.setAttribute("type", "button");
	row3ButtonSub.setAttribute("value", "sub");
	row3ButtonSub.innerText = "-";
	rowKeyBoardColRow3.appendChild(row3ButtonSub);

	let row4Button1 = document.createElement("button");
	row4Button1.classList.add("col", "number", "btn", "btn-dark");
	row4Button1.setAttribute("type", "button");
	row4Button1.setAttribute("value", "1");
	row4Button1.innerText = "1";
	rowKeyBoardColRow4.appendChild(row4Button1);

	let row4Button2 = document.createElement("button");
	row4Button2.classList.add("col", "number", "btn", "btn-dark");
	row4Button2.setAttribute("type", "button");
	row4Button2.setAttribute("value", "2");
	row4Button2.innerText = "2";
	rowKeyBoardColRow4.appendChild(row4Button2);

	let row4Button3 = document.createElement("button");
	row4Button3.classList.add("col", "number", "btn", "btn-dark");
	row4Button3.setAttribute("type", "button");
	row4Button3.setAttribute("value", "3");
	row4Button3.innerText = "3";
	rowKeyBoardColRow4.appendChild(row4Button3);

	let row4ButtonAdd = document.createElement("button");
	row4ButtonAdd.classList.add("col", "operator", "btn", "btn-dark");
	row4ButtonAdd.setAttribute("type", "button");
	row4ButtonAdd.setAttribute("value", "add");
	row4ButtonAdd.innerText = "+";
	rowKeyBoardColRow4.appendChild(row4ButtonAdd);

	let row5Button0 = document.createElement("button");
	row5Button0.classList.add("col-6", "number", "btn", "btn-dark");
	row5Button0.setAttribute("type", "button");
	row5Button0.setAttribute("value", "add");
	row5Button0.innerText = "0";
	rowKeyBoardColRow5.appendChild(row5Button0);

	let row5ButtonResult = document.createElement("button");
	row5ButtonResult.classList.add("col-6", "result", "btn", "btn-dark");
	row5ButtonResult.setAttribute("type", "button");
	row5ButtonResult.setAttribute("value", "result");
	row5ButtonResult.innerText = "=";
	rowKeyBoardColRow5.appendChild(row5ButtonResult);

	let col3 = document.createElement("div");
	col3.classList.add("col-lg");
	row.appendChild(col3);
})();
