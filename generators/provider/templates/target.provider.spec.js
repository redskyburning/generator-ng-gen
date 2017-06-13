describe('<%= namePascal %> Service Provider', () => {
	beforeEach(angular.mock.module('<%= appNameDashed %>'));

	it('should be registered', inject((<%= nameCamel %>Service) => {
		expect(<%= nameCamel %>Service).toEqual(jasmine.anything());
	}));

	describe('Without configuration', () => {
		it('It should have the default config value', inject((<%= nameCamel %>Service) => {
			expect(<%= nameCamel %>Service.config).toEqual('default');
		}));
	});

	describe('With configuration', () => {
		beforeEach(angular.mock.module((<%= nameCamel %>ServiceProvider) => {
			<%= nameCamel %>ServiceProvider.setConfig('foo');
		}));

		it('It should have the updated config value', inject((<%= nameCamel %>Service) => {
			expect(<%= nameCamel %>Service.config).toEqual('foo');
		}));
	});
});
