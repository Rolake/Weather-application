class UI{
	constructor(){
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.temperature = document.getElementById('w-string');
		this.humidity = document.getElementById('w-humidity');
		this.wind = document.getElementById('w-wind');
	}

	paint(weather){
		this.location.textContent = `${weather.name}, ${weather.sys.country}`;
		this.desc.textContent = `${weather.weather[0].description}`;
		this.temperature.textContent = `${weather.main.temp}\xB0C`;		//degree sign is represented with \xB0
		this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
		this.wind.textContent = `Wind: ${weather.wind.speed}mph`;
	}
}


/*function UI(location,desc,temperature,humidity,wind){
	this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.temperature = document.getElementById('w-string');
		this.humidity = document.getElementById('w-humidity');
		this.wind = document.getElementById('w-wind');

		this.getpaint = function(weather){
		this.location.textContent = `${weather.name}, ${weather.sys.country}`;
		this.desc.textContent = `${weather.weather[0].description}`;
		this.temperature.textContent = `${weather.main.temp}\xB0C`;		//degree sign is represented with \xB0
		this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`;
		this.wind.textContent = `Wind: ${weather.wind.speed}mph`;
		}
}*/
