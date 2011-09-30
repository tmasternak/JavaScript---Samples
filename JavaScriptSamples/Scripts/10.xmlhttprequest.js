
//Request for same-origin xml file
var request = new XMLHttpRequest();
request.open("GET", "http://localhost:54409/file.xml", false);
request.send(null);
var response = request.responseXML;


alert(response.xml);

