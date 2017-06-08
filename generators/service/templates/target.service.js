export class <%= namePascal %>Service {
	constructor ($log) {
		'ngInject';

		// Things injected
		this.$log = $log;

		// Class attributes
		this.foo = 'bar';
	}

	getFoo() {
		return this.foo;
	}

	setFoo(value) {
		this.foo = value;

		return this.foo;
	}
}
