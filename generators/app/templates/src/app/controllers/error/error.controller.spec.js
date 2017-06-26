describe('controller ErrorController', () => {
	let vm;

	beforeEach(angular.mock.module('test'));

	beforeEach(inject(($controller) => {
		vm = $controller('ErrorController');
	}));
});
