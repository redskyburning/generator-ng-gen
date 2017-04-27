export function config ($logProvider, $locationProvider, toastrConfig) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  $locationProvider.html5Mode(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;
}
