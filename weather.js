class Weather{
	constructor(city,state){
		this.apiKey = 'acda7b582573b235b2057d92218862b4';
		this.city = city;
		this.state = state;
	}
	getWeather(){
		let weather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}
			&appid=${this.apiKey}&units=metric`)		//metric is for degree Celsius
		.then(res =>{
			return res;
		})
		return weather;
	}
	changeLocation(city,state){
		this.city = city;
		this.state = state;
	}
}


/*function Weather(city,state){
	this.apiKey = 'acda7b582573b235b2057d92218862b4';
	this.city = city;
	this.state = state;

	this.getWeather = function(){
		let weather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}
			&appid=${this.apiKey}&units=metric`)		//metric is for degree Celsius
		.then(res =>{
			return res;
		})
		return weather;
	}

	this.changeLocation = function(city,state){
		this.city = city;
		this.state = state;
	}
}*/