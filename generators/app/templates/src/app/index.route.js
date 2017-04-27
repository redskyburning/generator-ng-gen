export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      abstract: true,
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('main.home', {
      url:'',
      templateUrl: 'app/controllers/home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
