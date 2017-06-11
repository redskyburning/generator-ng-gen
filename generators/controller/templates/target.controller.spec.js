describe('controller <%= namePascal %>Controller', () => {
	let vm;

	beforeEach(angular.mock.module('<%= appNameDashed %>'));

	beforeEach(inject(($controller) => {
		vm = $controller('<%= namePascal %>Controller');
	}));

	it('Foo should default to bar', () => {
		expect(vm.foo).toEqual('bar');
	});
});
