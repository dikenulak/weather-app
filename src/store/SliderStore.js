import { makeAutoObservable } from 'mobx';

class SliderStore {
	sliderIndex = 3;
	constructor() {
		makeAutoObservable(this);
	}

	sliderIndexFunction(index) {
		this.sliderIndex = index;
	}
}

export default new SliderStore();
