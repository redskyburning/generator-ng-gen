describe('<%= nameCamel %> constant',() => {
	beforeEach(angular.mock.module('<%= appNameDashed %>'));

	it('should be registered', inject((<%= nameCamel %>) => {
		expect(<%= nameCamel %>).toEqual(jasmine.anything());
	}));

	it('should have a value', inject((<%= nameCamel %>) => {
		expect(<%= nameCamel %>.foo).toEqual('bar');
	}));
});
