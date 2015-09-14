angular.module('involveIn').controller('LoginCtrl', ['$scope', function ($scope) {
    $scope.openDialog = function () {
    	$('#loginModal').modal({show: true, keyboard: false});
    };
}]);
