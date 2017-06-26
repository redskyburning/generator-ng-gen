export function <%= nameImport %>($log) {
  'ngInject';

  this.$log = $log;

  return (input) => {
    this.$log.info(`Filtering ${input}`);

    if(angular.isString(input)){
      return input.toUpperCase();
    } else {
      return '';
    }
  }
}
