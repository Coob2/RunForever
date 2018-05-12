var watchID;
var runPath[];
var startTime;
var endTime;

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
//when the app is sent to the background
$(document).onPause() {
watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}
//when the user starts a run
function startRun(){
	watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
}

function finishRun(){
	//when run is finished, make a new map with what the user has run.
var map = new google.maps.Map(
	Zoom:3,
	center:{runPath[0]},
	mapTypeId: 'terrain';
)
//draw a line from where the user has run.
var mapRun = new google.maps.polyline({
	path: runPath,
	geodesic: true,
	StrokeColour: 'FF0000',
	strokeOpacity: 0.9,
	strokeWeight: 2
})
mapRun.setMap(map);
}

//set location options
var locationOptions = {
maximumAge: 3000,
timeout: 5000,
enableHighAccuracy: true};

//get the current possition when location changes
function getPosition() {
	watchID = navigator.geolocation.watchPosition(successPosition, failPosition, locationOptions);
	//add the lat and long into an array for use with creating a finished map
}

//called when the position is successfully determined
function successPosition(position) {
//for each position that is updated, add to array runPath
runPath.push(new google.maps.LatLng(position.latitude, position.longitude));
}

//called if the position is not obtained correctly
function failPosition(error) {
}
