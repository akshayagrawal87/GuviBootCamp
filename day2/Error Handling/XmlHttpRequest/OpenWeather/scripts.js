// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

//Here we have redirected the actual api to a proxy server to add access-Control-Allow-Origin: * header to the response

var url_string = 'https://api.openweathermap.org/data/2.5/onecall?lat=21.1418&lon=72.7709&exclude=minutely,daily&appid=a3aef5040eb809f3fdd82cef7a238b8e';



// Open a new connection, using the GET request on the URL endpoint

try {
  fetch(url_string)
    .then(response => response.json())
    .then(json => console.log(json));

} catch (err) {

}



/*
var proxy = "https://cors-anywhere.herokuapp.com/"
var url_string1 ="https://dog.ceo/api/breeds/list/all";
var url_string2 =  "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"


fetch(url_string2) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/