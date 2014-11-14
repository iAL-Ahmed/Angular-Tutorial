angular.module('angularThing.mainController', [])

.controller("mainController", ['$scope', 'Main', function($scope, Main){
  $scope.message = Main.message;
}])