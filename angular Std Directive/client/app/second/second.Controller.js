angular.module('angularThing.secondController', [])

//You will notice something special about this set up.
//You can use this module as both a directive OR as a stand alone
//module. This does both.
.controller('secondController', ['$scope', 'Second', function($scope, Second){
  $scope.joe1 = {message: "JOOOOOOOE NUMBER 1"};
  $scope.joe2 = {message: "JOOOOOOOE NUMBER 2"};
  $scope.secondMessage = Second.message;
}])