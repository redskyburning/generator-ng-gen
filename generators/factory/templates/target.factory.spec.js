describe('service <%= nameCamel %>Factory', () => {
	beforeEach(angular.mock.module('<%= appNameDashed %>'));

  it('should be registered', inject(<%= nameCamel %>Factory => {
      expect(<%= nameCamel %>Factory).toEqual(jasmine.anything());
  }));

  describe('public variable', () => {
    it('should exist', inject(<%= nameCamel %>Factory => {
    expect(<%= nameCamel %>Factory.publicVar).toEqual(jasmine.anything());
  }));

  it('should have a default value of "public"', inject(<%= nameCamel %>Factory => {
      expect(<%= nameCamel %>Factory.publicVar).toEqual('public');
  }));
  });

  describe('private var and related functions', () => {
    it('should not allow the private var to be accessed', inject((<%= nameCamel %>Factory) => {
      expect(<%= nameCamel %>Factory.privateVar).not.toEqual(jasmine.anything());
    }));

    it('should allow access to the private var via the getter',inject((<%= nameCamel %>Factory) => {
        expect(<%= nameCamel %>Factory.getPrivateVar()).toEqual('private');
    }));

    it('should set the private var with the setter and allow for chaining',inject((<%= nameCamel %>Factory) => {
        expect(<%= nameCamel %>Factory.setPrivateVar('foo!').getPrivateVar()).toEqual('foo!');
    }));
  });
});
