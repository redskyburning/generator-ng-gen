describe('<%= namePascal %> component', () => {
	let component;

	beforeEach(angular.mock.module('<%= appNameDashed %>'));

	beforeEach(inject(($componentController) => {
		component = $componentController('<%= nameInstance %>');
	}));

	it('should be registered', () => {
		expect(component).toEqual(jasmine.anything());
	});

	it('Foo should default to bar', () => {
		expect(component.foo).toEqual('bar');
	});
});
