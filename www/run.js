var watchID;
var lon[];
var lat[];

var locationOptions = {
	maximumAge: 10000,
	timeout: 6000,
	enableHighAccuracy: true
};

//when the jQuery Mobile page is initialised
$(document).on('pageinit', initMap() {

	//set up listener for button click
	$(document).on('click', getPosition);

	//change time box to show message
	$('#time').val("Press the button to get location data");
});

$(document).onPause() {
watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}

//get the current possition when location changes
function getPosition() {
	watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}

//set location options
var locationOptions = {
maximumAge: 3000,
timeout: 5000,
enableHighAccuracy: true};

function finishRun(){
  var map;
  function initMap() {
  	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: -34.397, lng: 150.644},
  		zoom: 8
  	});
  }
}

//called when the position is successfully determined
function successPosition(position) {

	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var accuracy = position.coords.accuracy;

}

//called if the position is not obtained correctly
function failPosition(error) {

}
