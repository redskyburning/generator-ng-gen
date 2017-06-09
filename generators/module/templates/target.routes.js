export function <%= nameCamel %>Routes($stateProvider) {
	'ngInject';
	$stateProvider
		/* route injection target */
		.state('example-controller', {
			url         : '<%= nameDashed%>/example-controller',
			templateUrl : 'app/components/<%= nameDashed %>/controllers/example-controller/example-controller.html',
			controller  : 'ExampleControllerController',
			controllerAs: 'vm'
		});
}
