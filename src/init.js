angular.module('involveIn', ['ngRoute', 'ngResource', 'ngAria','ngSanitize'])
    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
        $compileProvider.debugInfoEnabled(true);
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['involveIn'], {
        strictDi: true
    });
});