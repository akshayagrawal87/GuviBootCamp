// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

var url_string = 'https://dog.ceo/api/breeds/list/all';

try {

  // Open a new connection, using the GET request on the URL endpoint
  request.open('GET', url_string, true)

  //To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object
  request.send();

  request.onload = function () {

    var data = JSON.parse(this.response)

    console.log(data);

  }
} catch (err) {
  console.log(err.messgae)
}