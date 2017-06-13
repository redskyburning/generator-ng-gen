export class <%= namePascal %>Service {
	constructor(config = {}, $log) {
		'ngInject';

		this.$log   = $log;
		this.config = config;
	}
}
