export function MalarkeyDirective() {
	'ngInject';

	return {
		restrict    : 'A',
		scope       : {},
		controller  : MalarkeyController,
		controllerAs: 'vm',
		template : '&nbsp;'
};
}

class MalarkeyController {
	constructor($log) {
		'ngInject';

		this.$log = $log;
		this.foo = 'bar';
	}
}
