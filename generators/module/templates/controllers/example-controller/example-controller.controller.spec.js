describe('controller ExampleControllerController', () => {
	let vm;

	beforeEach(angular.mock.module('test'));

	beforeEach(inject(($controller) => {
		vm = $controller('ExampleControllerController');
	}));

	it('Foo should default to bar', () => {
		expect(vm.foo).toEqual('bar');
	});
});
