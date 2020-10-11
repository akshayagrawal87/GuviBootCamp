//Api key for weather Api
const API_KEY = "a3aef5040eb809f3fdd82cef7a238b8e";

//Function to get details of specified Country
function getAllCountries(name) {
	return fetch("https://restcountries.eu/rest/v2/name/" + name)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			console.log(data);
		});
}

//Function to get Weather of specified city
function getWeatherByLocation(cityname) {
	fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			cityname +
			"&appid=" +
			API_KEY
	)
		.then((Response) => {
			return Response.text();
		})
		.then((data) => {
			console.log("Weather Data of " + cityname + ": " + data);
		});
}

//IIFE TO GENERATE BASIC STUCTURE OF HTML
(() => {
	//Adding main section
	let main = document.createElement("main");
	document.body.appendChild(main);

	//Adding container div
	let container = document.createElement("div");
	container.classList.add("container-fluid");
	main.appendChild(container);

	//Adding Row Div
	let row = document.createElement("div");
	row.classList.add("row");
	container.appendChild(row);

	//Adding col Divs
	let col1 = document.createElement("div");
	col1.classList.add("col-lg", "col-sm-12", "afg");

	let col2 = document.createElement("div");
	col2.classList.add("col-lg", "col-sm-12", "nepal");

	let col3 = document.createElement("div");
	col3.classList.add("col-lg", "col-sm-12", "srilanka");

	row.appendChild(col1);
	row.appendChild(col2);
	row.appendChild(col3);
})();

//IIFE TO GENERATE CARD FOR AFG
(() => {
	let afg = document.querySelector(".afg");

	let card = document.createElement("div");
	card.classList.add("card", "text-center");

	let cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	let cardHeader = document.createElement("div");
	cardHeader.classList.add("card-header");

	card.appendChild(cardHeader);

	let img = document.createElement("img");
	img.classList.add("card-img-top");
	img.setAttribute("src", "https://www.countryflags.io/af/shiny/64.png");
	card.appendChild(img);

	card.appendChild(cardBody);
	afg.appendChild(card);

	let country = "afg";

	fetch("https://restcountries.eu/rest/v2/name/" + country)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			//console.log(data);

			//Adding Card Title to Card
			cardHeader.innerText = data[0].name;

			let cardText = document.createElement("div");
			cardText.classList.add("card-text");
			cardBody.appendChild(cardText);

			let capt = document.createElement("div");
			let capital = "Capital: " + data[0].capital;
			capt.innerText = capital;
			cardText.appendChild(capt);

			let reg = document.createElement("div");
			let region = "Region: " + data[0].region;
			reg.innerText = region;
			cardText.appendChild(reg);

			let CountryC = document.createElement("div");
			let CountryCode = "Country Code: " + data[0].alpha3Code;
			CountryC.innerText = CountryCode;
			cardText.appendChild(CountryC);

			let weatherButton = document.createElement("button");
			weatherButton.classList.add("btn", "btn-primary");
			weatherButton.innerText = "Click for Weather";
			cardBody.appendChild(weatherButton);

			weatherButton.addEventListener("click", function (event) {
				//console.log("hi");
				fetch(
					"https://api.openweathermap.org/data/2.5/weather?q=" +
						data[0].capital +
						"&appid=" +
						API_KEY
				)
					.then((Response) => {
						return Response.json();
					})
					.then((value) => {
						alert(
							"Weather Data of " +
								data[0].capital +
								"\n" +
								"Current Temperature: " +
								value.main.temp +
								"\n" +
								"Condition:" +
								value.weather[0].main +
								"\n" +
								"Humidity:" +
								value.main.humidity +
								"\n" +
								"Wind Speed:" +
								value.wind.speed
						);
					});
			});
		});
})();
//IIFE TO GENERATE CARD FOR NEPAL
(() => {
	let nepal = document.querySelector(".nepal");

	let card = document.createElement("div");
	card.classList.add("card", "text-center");

	let cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	let cardHeader = document.createElement("div");
	cardHeader.classList.add("card-header");

	card.appendChild(cardHeader);

	let img = document.createElement("img");
	img.classList.add("card-img-top");
	img.setAttribute("src", "https://www.countryflags.io/np/shiny/64.png");
	card.appendChild(img);

	card.appendChild(cardBody);
	nepal.appendChild(card);

	let country = "np";

	fetch("https://restcountries.eu/rest/v2/name/" + country)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			//console.log(data);

			//Adding Card Title to Card
			cardHeader.innerText = data[0].name;

			let cardText = document.createElement("div");
			cardText.classList.add("card-text");
			cardBody.appendChild(cardText);

			let capt = document.createElement("div");
			let capital = "Capital: " + data[0].capital;
			capt.innerText = capital;
			cardText.appendChild(capt);

			let reg = document.createElement("div");
			let region = "Region: " + data[0].region;
			reg.innerText = region;
			cardText.appendChild(reg);

			let CountryC = document.createElement("div");
			let CountryCode = "Country Code: " + data[0].alpha3Code;
			CountryC.innerText = CountryCode;
			cardText.appendChild(CountryC);

			let weatherButton = document.createElement("button");
			weatherButton.classList.add("btn", "btn-primary");
			weatherButton.innerText = "Click for Weather";
			cardBody.appendChild(weatherButton);

			weatherButton.addEventListener("click", function (event) {
				fetch(
					"https://api.openweathermap.org/data/2.5/weather?q=" +
						data[0].capital +
						"&appid=" +
						API_KEY
				)
					.then((Response) => {
						return Response.json();
					})
					.then((value) => {
						alert(
							"Weather Data of " +
								data[0].capital +
								"\n" +
								"Current Temperature: " +
								value.main.temp +
								"\n" +
								"Condition:" +
								value.weather[0].main +
								"\n" +
								"Humidity:" +
								value.main.humidity +
								"\n" +
								"Wind Speed:" +
								value.wind.speed
						);
					});
			});
		});
})();

(() => {
	let srilanka = document.querySelector(".srilanka");

	let card = document.createElement("div");
	card.classList.add("card", "text-center");

	let cardBody = document.createElement("div");
	cardBody.classList.add("card-body");

	let cardHeader = document.createElement("div");
	cardHeader.classList.add("card-header");

	card.appendChild(cardHeader);

	let img = document.createElement("img");
	img.classList.add("card-img-top");
	img.setAttribute("src", "https://www.countryflags.io/lk/shiny/64.png");
	card.appendChild(img);

	card.appendChild(cardBody);
	srilanka.appendChild(card);

	let country = "sri";

	fetch("https://restcountries.eu/rest/v2/name/" + country)
		.then((Response) => {
			return Response.json();
		})
		.then((data) => {
			//console.log(data);

			//Adding Card Title to Card
			cardHeader.innerText = data[0].name;

			let cardText = document.createElement("div");
			cardText.classList.add("card-text");
			cardBody.appendChild(cardText);

			let capt = document.createElement("div");
			let capital = "Capital: " + data[0].capital;
			capt.innerText = capital;
			cardText.appendChild(capt);

			let reg = document.createElement("div");
			let region = "Region: " + data[0].region;
			reg.innerText = region;
			cardText.appendChild(reg);

			let CountryC = document.createElement("div");
			let CountryCode = "Country Code: " + data[0].alpha3Code;
			CountryC.innerText = CountryCode;
			cardText.appendChild(CountryC);

			let weatherButton = document.createElement("button");
			weatherButton.classList.add("btn", "btn-primary");
			weatherButton.innerText = "Click for Weather";
			cardBody.appendChild(weatherButton);

			weatherButton.addEventListener("click", function (event) {
				fetch(
					"https://api.openweathermap.org/data/2.5/weather?q=" +
						data[0].capital +
						"&appid=" +
						API_KEY
				)
					.then((Response) => {
						return Response.json();
					})
					.then((value) => {
						alert(
							"Weather Data of " +
								data[0].capital +
								"\n" +
								"Current Temperature: " +
								value.main.temp +
								"\n" +
								"Condition:" +
								value.weather[0].main +
								"\n" +
								"Humidity:" +
								value.main.humidity +
								"\n" +
								"Wind Speed:" +
								value.wind.speed
						);
					});
			});
		});
})();
