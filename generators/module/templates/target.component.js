class <%= nameImport %>Controller {
	constructor($log) {
		'ngInject';

		this.$log = $log;
		this.foo = 'bar';
	}
}

export const <%= nameImport %> = {
	controller  : <%= nameImport %>Controller,
	controllerAs: 'vm',
	templateUrl : 'app/components/<%= nameDashed %>/<%= nameDashed %>.html'
};
