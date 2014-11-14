angular.module('angularThing.secondController', [])

.controller('secondController', ['$scope', 'Second', function($scope, Second){
  $scope.joe1 = {message: "JOOOOOOOE NUMBER 1"};
  $scope.joe2 = {message: "JOOOOOOOE NUMBER 2"};
  $scope.secondMessage = Second.message;
}])