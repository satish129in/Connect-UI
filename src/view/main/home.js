angular.module('involveIn').config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './view/main/home.html',
        controller: 'HomeCtrl'
    });
}]).controller('HomeCtrl', ['$scope', '$location', function ($scope, $location) {
    console.log('Entered....');
}]);