describe('<%= namePascal %> Service Provider', () => {
  beforeEach(angular.mock.module('<%= appNameDashed %>'));

  it('should be registered', inject((<%= nameCascal %>Service) => {
      expect(<%= nameCascal %>Service).toEqual(jasmine.anything());
  }));

  describe('Without configuration',() => {
    it('It should have the default config value',inject((<%= nameCascal %>Service) => {
      expect(<%= nameCascal %>Service.config).toEqual('default');
    }));
  });

  describe('With configuration',() => {
    beforeEach(angular.mock.module((<%= nameCascal %>ServiceProvider) => {
      <%= nameCascal %>ServiceProvider.setConfig('foo');
    }));

    it('It should have the updated config value',inject((<%= nameCascal %>Service) => {
        expect(<%= nameCascal %>Service.config).toEqual('foo');
    }));
  });
});
