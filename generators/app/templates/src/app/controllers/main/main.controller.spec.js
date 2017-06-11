describe('controllers', () => {
	let vm;

	beforeEach(angular.mock.module('<%= appNameDashed %>'));

	beforeEach(inject(($controller) => {
		vm = $controller('MainController');
	}));

	it('Foo should default to bar', () => {
		expect(vm.foo).toEqual('bar');
	});
});
