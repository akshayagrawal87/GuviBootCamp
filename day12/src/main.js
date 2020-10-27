//IIFE FOR INDEX.HTML

try {
	let countOfQuestion = 0;
	let data;
	let scoreValue = 0;
	let answers = [];
	const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
	let correctAnswer;

	//IIFE FOR INDEX.HTML
	(() => {
		try {
			let index = document.querySelector(".index");
			index.classList.add("container");

			let row = document.createElement("div");
			row.classList.add("row", "justify-content-center");
			index.appendChild(row);

			let col1 = document.createElement("div");
			col1.classList.add("col-lg-4", "col-sm-12");
			row.appendChild(col1);

			let col2 = document.createElement("div");
			col2.classList.add(
				"col-lg-4",
				"col-sm-12",
				"indexCol",
				"align-content-center"
			);
			row.appendChild(col2);

			let h1 = document.createElement("h1");
			h1.innerText = "Quick Quiz";
			col2.appendChild(h1);

			let play = document.createElement("a");
			play.classList.add("btn", "btn-light", "playButton");
			play.setAttribute("href", "src/game.html");
			play.innerText = "Play";
			col2.appendChild(play);

			let br = document.createElement("br");
			col2.appendChild(br);

			let highscore = document.createElement("a");
			highscore.classList.add("btn", "btn-light", "highscoreButton");
			highscore.setAttribute("href", "src/end.html");
			highscore.innerText = "HighScores";
			col2.appendChild(highscore);

			let col3 = document.createElement("div");
			col3.classList.add("col-lg-4", "col-sm-12");
			row.appendChild(col3);
		} catch (e) {
			console.warn(e.message);
		}
	})();

	//IIFE FOR GAME.HTML
	(async () => {
		try {
			await getTriviaData();

			let game = document.querySelector(".game");
			game.classList.add("container");

			let row = document.createElement("div");
			row.classList.add("row", "justify-content-center");
			game.appendChild(row);

			let col = document.createElement("div");
			col.classList.add("col-12");
			row.appendChild(col);

			let gameData = document.createElement("div");
			gameData.classList.add("row", "pt-5");
			col.appendChild(gameData);

			let h2 = document.createElement("h2");
			h2.classList.add("col-4", "counter");
			h2.innerText = "Question " + countOfQuestion + "/10";
			gameData.appendChild(h2);

			let blank = document.createElement("blank");
			blank.classList.add("col");
			gameData.appendChild(blank);

			let score = document.createElement("h2");
			score.classList.add("col", "ml-5", "score");
			score.innerText = "Score " + scoreValue;
			gameData.appendChild(score);

			let progressBar = document.createElement("div");
			progressBar.classList.add("progress", "mt-3");
			col.appendChild(progressBar);

			let progressValue = document.createElement("div");
			progressValue.classList.add("progress-bar");
			progressBar.appendChild(progressValue);
			progressValue.setAttribute("style", "width:0%;height:40px");

			let question = document.createElement("div");
			question.classList.add("question", "pt-5", "mt-5");
			question.innerText = "This is dummy question";
			col.appendChild(question);

			let options = document.createElement("div");
			options.classList.add("mt-3");
			col.appendChild(options);

			option1 = document.createElement("div");
			option1.classList.add("option", "mt-3");
			option1Content = document.createElement("span");
			option1Letter = document.createElement("letter");
			option1Letter.classList.add("optionLetter");
			option1Letter.innerText = "A";
			option1Value = document.createElement("optionValue");
			option1Value.classList.add("optionValue");
			option1Value.innerText = "Dummy";
			option1Content.appendChild(option1Letter);
			option1Content.appendChild(option1Value);
			option1.appendChild(option1Content);
			options.appendChild(option1);

			option2 = document.createElement("div");
			option2.classList.add("option", "mt-3");
			option2Content = document.createElement("span");
			option2Letter = document.createElement("letter");
			option2Letter.classList.add("optionLetter");
			option2Letter.innerText = "B";
			option2Value = document.createElement("optionValue");
			option2Value.classList.add("optionValue");
			option2Value.innerText = "Dummy";
			option2Content.appendChild(option2Letter);
			option2Content.appendChild(option2Value);
			option2.appendChild(option2Content);
			options.appendChild(option2);

			option3 = document.createElement("div");
			option3.classList.add("option", "mt-3");
			option3Content = document.createElement("span");
			option3Letter = document.createElement("letter");
			option3Letter.classList.add("optionLetter");
			option3Letter.innerText = "C";
			option3Value = document.createElement("optionValue");
			option3Value.classList.add("optionValue");
			option3Value.innerText = "Dummy";
			option3Content.appendChild(option3Letter);
			option3Content.appendChild(option3Value);
			option3.appendChild(option3Content);
			options.appendChild(option3);

			option4 = document.createElement("div");
			option4.classList.add("option", "mt-3");
			option4Content = document.createElement("span");
			option4Letter = document.createElement("letter");
			option4Letter.classList.add("optionLetter");
			option4Letter.innerText = "D";
			option4Value = document.createElement("optionValue");
			option4Value.classList.add("optionValue");
			option4Value.innerText = "Dummy";
			option4Content.appendChild(option4Letter);
			option4Content.appendChild(option4Value);
			option4.appendChild(option4Content);
			options.appendChild(option4);

			await Trivia();
		} catch (e) {
			console.warn(e.message);
		}
	})();

	//Funtion to fetch trivia data
	async function getTriviaData() {
		try {
			let response = await fetch(
				"https://opentdb.com/api.php?amount=10&type=multiple"
			);

			this.data = await response.json();
		} catch (e) {
			console.error(e.message);
		}
	}
	//Function to call first function and add button event listener using checkAnswer
	async function Trivia() {
		let score = 0;

		nextQuestion(countOfQuestion);

		let optionButton = document.querySelectorAll(".option");

		for (let j = 0; j < 4; j++) {
			optionButton[j].addEventListener("click", function (e) {
				e.preventDefault();
				checkAnswer(answers[j], j);
			});
		}
	}

	//A function to shuffle the array
	function shuffle(array) {
		try {
			array.sort(() => Math.random() - 0.5);
		} catch (e) {
			console.log(e.message);
		}
	}

	//Event listener for button to check answer and chnage color
	async function checkAnswer(answer, key) {
		try {
			let optionButton = document.querySelectorAll(".option");
			//console.log("I clicked on" + answer);
			if (countOfQuestion < 10) {
				let value = this.data;

				// console.log(
				// 	"Correct answer is" + value.results[countOfQuestion].correct_answer
				// );

				let score = document.querySelector(".score");
				console.log(score);

				if (value.results[countOfQuestion].correct_answer === answer) {
					scoreValue = scoreValue + 10;

					score.innerText = "Score " + scoreValue;
					changeColor(key, true);
				} else {
					changeColor(key, false);
				}
				countOfQuestion++;

				setTimeout(() => {
					nextQuestion(countOfQuestion);
				}, 1300);
			}
			if (countOfQuestion === 10) {
				localStorage.lastScore = scoreValue;
				location.href = "highscores.html";
			}
		} catch (e) {
			console.warn(e.message);
		}
	}

	//Change color of button on the basis of answer.
	function changeColor(key, correct) {
		return new Promise((res, rej) => {
			if (correct) {
				let optionButton = document.querySelectorAll(".option");
				optionButton[key].setAttribute("id", "correct");

				for (let i = 0; i < 4; i++) {
					if (i != key) {
						optionButton[i].setAttribute("id", "gray");
					}
				}

				setTimeout(() => {
					for (let i = 0; i < 4; i++) {
						optionButton[i].removeAttribute("id");
					}
				}, 1100);
			} else {
				let optionButton = document.querySelectorAll(".option");
				optionButton[key].setAttribute("id", "incorrect");

				let optionvalue = document.querySelectorAll("optionvalue");

				for (let i = 0; i < 4; i++) {
					if (i != key) {
						optionButton[i].setAttribute("id", "gray");
					}
					if (correctAnswer === optionvalue[i].innerText) {
						optionButton[i].setAttribute("id", "correct");
					}
				}

				setTimeout(() => {
					for (let i = 0; i < 4; i++) {
						optionButton[i].removeAttribute("id");
					}
				}, 1100);
			}
		});
	}

	//Loads next question and options on html
	function nextQuestion(i) {
		//console.log("inside nextQuestion");
		value = this.data;

		//console.log(countOfQuestion);

		let counter = document.querySelector(".counter");

		if (i < this.data.results.length) {
			answer = [];
			correctAnswer = value.results[i].correct_answer;
			answers = [
				value.results[i].correct_answer,
				...value.results[i].incorrect_answers,
			];
			counter.innerText = "Question " + (countOfQuestion + 1) + "/10";
			let progressValue = document.querySelector(".progress-bar");
			progressValue.setAttribute(
				"style",
				"width:" + (countOfQuestion + 1) * 10 + "%;height:40px"
			);
			shuffle(answers);

			let question = document.querySelector(".question");

			let optionvalue = document.querySelectorAll("optionvalue");
			let optionButton = document.querySelectorAll(".option");

			question.innerHTML = value.results[i].question;

			for (let j = 0; j < 4; j++) {
				optionvalue[j].innerHTML = answers[j];
			}
		}
	}

	//Function to save high highcores using local storage
	function saveHigh() {
		let value = document.querySelector(".inputHighScore").value;

		const highscore = {
			name: value,
			score: localStorage.lastScore,
		};
		highScores.push(highscore);
		highScores.sort((a, b) => {
			return b - a;
		});

		localStorage.setItem("highScores", JSON.stringify(highScores));
		location.href = "../index.html";
	}
	//IFFE to setup higscore page
	(() => {
		try {
			let highscore = document.querySelector(".highscores");
			highscore.classList.add("container");

			let row = document.createElement("div");
			row.classList.add("row", "justify-content-center");
			highscore.appendChild(row);

			let col1 = document.createElement("div");
			col1.classList.add("col-lg-4", "col-sm-12");
			row.appendChild(col1);

			let col2 = document.createElement("div");
			col2.classList.add("col-lg-4", "col-sm-12", "align-self-center");
			row.appendChild(col2);

			let col3 = document.createElement("div");
			col3.classList.add("col-lg-4", "col-sm-12");
			row.appendChild(col3);

			let headerScore = document.createElement("p");
			headerScore.classList.add("highScoreValuePara");
			headerScore.innerText = "Your Score";
			col2.appendChild(headerScore);

			let h2 = document.createElement("h2");
			h2.classList.add("highScoreValue");
			h2.innerText = localStorage.lastScore;
			col2.appendChild(h2);

			let input = document.createElement("input");
			input.setAttribute("type", "text");
			input.classList.add("inputHighScore");
			input.setAttribute("placeholder", "Enter your name");
			col2.appendChild(input);

			let saveHighScore = document.createElement("button");
			saveHighScore.classList.add("btn", "btn-light", "HighScoreplayButton");
			saveHighScore.innerText = "Save My Score";

			col2.appendChild(saveHighScore);
			saveHighScore.setAttribute("disabled", true);
			saveHighScore.addEventListener("click", function (event) {
				event.preventDefault();
				if (input.value.length > 0) {
					saveHigh();
				} else {
					alert("enter the username");
				}
			});

			let play = document.createElement("a");
			play.classList.add("btn", "btn-light", "HighScoreplayButton");
			play.setAttribute("href", "game.html");
			play.innerText = "Play Again";
			col2.appendChild(play);

			let br = document.createElement("br");
			col2.appendChild(br);

			let gohome = document.createElement("a");
			gohome.classList.add("btn", "btn-light", "HighScoreplayButton");
			gohome.setAttribute("href", "end.html");
			gohome.innerText = "HighScores";
			col2.appendChild(gohome);

			input.addEventListener("keyup", (e) => {
				e.preventDefault();
				if (input.value === "") {
					saveHighScore.setAttribute("disabled", true);
				} else {
					saveHighScore.removeAttribute("disabled");
				}
			});
		} catch (e) {
			console.warn(e.message);
		}
	})();
	//IIFE to setup endpage
	(() => {
		try {
			let end = document.querySelector(".end");
			end.classList.add("container");

			let row = document.createElement("div");
			row.classList.add("row", "justify-content-center");
			end.appendChild(row);

			let col1 = document.createElement("div");
			col1.classList.add("col-lg-4", "col-sm-12");
			row.appendChild(col1);

			let col2 = document.createElement("div");
			col2.classList.add("col-lg-4", "col-sm-12", "align-self-center");
			row.appendChild(col2);

			let col3 = document.createElement("div");
			col3.classList.add("col-lg-4", "col-sm-12");
			row.appendChild(col3);

			let headerScore = document.createElement("p");
			headerScore.classList.add("highScoreValuePara");
			headerScore.innerText = "High Scores";
			col2.appendChild(headerScore);

			try {
				let arr = localStorage.getItem("highScores");
				let scores = JSON.parse(arr);
				console.log(scores);
				scores.sort((a, b) => {
					return b.score - a.score;
				});

				console.log(scores);

				console.log(scores.length);
				if (scores.length > 0) {
					let scoreTable = document.createElement("div");
					for (let i = 0; i < scores.length; i++) {
						scoreTable.classList.add("scoreTable");

						scoreTable.innerHTML =
							scoreTable.innerHTML +
							scores[i].name +
							"----" +
							scores[i].score +
							"<br/>";
					}
					col2.appendChild(scoreTable);
				}
			} catch (e) {
				console.log(e.message);
			}

			let gohome = document.createElement("a");
			gohome.classList.add("btn", "btn-light", "HighScoreplayButton", "mt-5");
			gohome.setAttribute("href", "../index.html");
			gohome.innerText = "Go Home";
			col2.appendChild(gohome);
		} catch (e) {
			console.warn(e.message);
		}
	})();
} catch (e) {
	console.error(e.message);
}
