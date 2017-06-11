export function <%= namePascal %>Directive() {
    'ngInject';

    return {
        restrict    : 'A',
        scope       : {},
        controller  : <%= namePascal %>Controller,
        controllerAs: 'vm',
        templateUrl : 'app/components/<%= nameDashed %>/<%= nameDashed %>.html'
    };
}

class <%= namePascal %>Controller {
    constructor($log) {
        'ngInject';

        this.$log = $log;
        this.foo = 'bar';
    }
}
