describe('<%= nameCamel %> model',() => {
	beforeEach(angular.mock.module('<%= appNameDashed %>'));

	it('should be registered', inject((<%= nameClass %>) => {
		expect(<%= nameClass %>).toEqual(jasmine.anything());
	}));

	it('can be used to new up an instance with default values', inject((<%= nameClass %>) => {
		let instance = new <%= nameClass %>();
		expect(instance.foo).toEqual('bar');
	}));
});
