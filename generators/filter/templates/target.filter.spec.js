describe('Filter <%= nameImport %>', () => {
  let filter;

  beforeEach(angular.mock.module('<%= appNameDashed %>'));

  beforeEach(inject((<%= nameImport %>) => {
    filter = <%= nameImport %>;
  }));

  it('should be registered', () => {
    expect(filter).toEqual(jasmine.anything());
  });

  it('should convert strings to uppercase', () => {
    expect(filter('foo')).toEqual('FOO');
  });

  it('should convert non-strings to empty strings', () => {
    expect(filter([])).toEqual('');
  })
});
