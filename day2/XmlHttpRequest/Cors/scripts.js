// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

//Here we have redirected the actual api to a proxy server to add access-Control-Allow-Origin: * header to the response

var url_string = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';



// Open a new connection, using the GET request on the URL endpoint


fetch(url_string)
  .then(response => response.json())
  .then(json => console.log(json));





/*
var proxy = "https://cors-anywhere.herokuapp.com/"
var url_string1 ="https://dog.ceo/api/breeds/list/all";
var url_string2 =  "https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com"


fetch(url_string2) // Call the fetch function passing the url of the API as a parameter
.then(res=>res.json())
.then(data=>console.log(data))
*/