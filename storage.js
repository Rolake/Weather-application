class Storage{
	constructor(){
		this.city;
		this.state;
		this.defaultCity = 'Lagos';
		this.defaultState = 'NG';
	}

	getLocationData() {
	if(localStorage.getItem('city') === null){
		this.city = this.defaultCity;
	}else{
		this.city = localStorage.getItem('city');
	}

	if(localStorage.getItem('state') === null){
		this.state = this.defaultState;
	}else{
		this.state = localStorage.getItem('state');
	}

	return {
		city: this.city,
		state: this.state
	}
}
	setLocationData(city,state){
		localStorage.setItem('city', city);
		localStorage.setItem('state', state);
	}
}

/*function Storage(city,state,defaultCity,defaultState){
		this.city;
		this.state;
		this.defaultCity = 'Lagos';
		this.defaultState = 'NG';

		this.getLocationData = function() {
			if(localStorage.getItem('city') === null){
		this.city = this.defaultCity;
	}else{
		this.city = localStorage.getItem('city');
	}

	if(localStorage.getItem('state') === null){
		this.state = this.defaultState;
	}else{
		this.state = localStorage.getItem('state');
	}

	return {
		city: this.city,
		state: this.state
		}
} 
}*/