/*global document, window, alert, console, require*/
//initialize storage
const storage = new Storage();

//get stored location data
const weatherLocation = storage.getLocationData();

//instantiate weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

//instantiate UI
const ui = new UI();

//get weather on page load
document.addEventListener('DOMContentLoaded', getWeather);	//DOMContentLoaded is used to call getWeather function once the page loads

//change location
document.getElementById('w-change-btn').addEventListener('click', function(e){
	const city = document.getElementById('city').value;
	const state = document.getElementById('state').value;

	//change location
	weather.changeLocation(city, state);

	//set location in local storage
	storage.setLocationData(city, state);

	//get and display weather
	getWeather();

	//class modal
	$('#locModal').modal('hide');
})

function getWeather(){
	weather.getWeather()
	.then(results => {
		//console.log(results.json());
		return results.json();
	})
	.then(response => {
		//console.log(response);
		ui.paint(response);
	})
	.catch(err =>{
		console.log(err);
	})
}
console.log('Hey');
//getWeather()