import { makeAutoObservable, action } from 'mobx';
import axios from 'axios';

class APICallStore {
	weatherData = {};
	loading = true;
	dataLoading = true;
	unit = 'imperial';
	error= '';

	constructor() {
		makeAutoObservable(this);
	}

	async axiosCall(unit = this.unit) {
		try {
			axios
				.get(
					`https://openweathermap.org/data/2.5/onecall?lat=27.72&lon=85.32&units=${unit}&appid=439d4b804bc8187953eb36d2a8c26a02`
				)
				.then(
					action('fetchSuccess', (response) => {
						this.weatherData = response.data;
						this.loading = false;
						this.dataLoading = false;
					}),
					action('fetchError', (error) => {
						this.loading = 'error';
					})
				);
		} catch (error) {
			this.error = error;
		}
	}

	getAPI() {
		this.loading = true;
		this.axiosCall();
	}

	getLoadedAPI(unit) {
		this.dataLoading = true;
		this.axiosCall(unit);
		this.unit = unit;
	}
}

export default new APICallStore();
