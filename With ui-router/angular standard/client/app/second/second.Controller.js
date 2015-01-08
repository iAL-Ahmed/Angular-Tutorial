angular.module('angularThing.secondController', [])

.controller('secondController', ['$scope', 'Second', function($scope, Second){
  console.log(Second.message);
  $scope.secondMessage = Second.message;
}])