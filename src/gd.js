angular.module('involveIn', ['ngRoute', 'ngResource', 'ngAria','ngSanitize'])
    .config(['$routeProvider', '$compileProvider', function ($routeProvider, $compileProvider) {
        $compileProvider.debugInfoEnabled(true);
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['involveIn'], {
        strictDi: true
    });
});;;;angular.module('involveIn').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './view/main/home.html',
        controller: 'HomeCtrl'
    });
}]).controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {
    
}]);;angular.module('involveIn').controller('LoginCtrl', ['$scope', function ($scope) {
    $scope.openDialog = function () {
    	$('#loginModal').modal({show: true, keyboard: false});
    };
}]);
