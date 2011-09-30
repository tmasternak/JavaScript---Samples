

var jsonUrl = 'http://dev.virtualearth.net/REST/v1/Locations/PL/Krakow?key=AidE3ZOZlMDx2xtMgATA_ZckMjX6mo0Ch4GQullCO4Go1E4mHbOXq3USKfbj_S5s';

var request = new XMLHttpRequest();
request.open("GET", jsonUrl, false);
request.send(null);
var response = request.responseXML;


/*
var jsonpUrl = 'http://dev.virtualearth.net/REST/v1/Locations/PL/Krakow?jsonp=?&key=AidE3ZOZlMDx2xtMgATA_ZckMjX6mo0Ch4GQullCO4Go1E4mHbOXq3USKfbj_S5s';

$.getJSON(jsonpUrl, function (data) {

    alert(data);
});

*/