angular.module('angularThing.secondController', ['ui.router'])
//all state config stuff happens in the main controller in the views object.
//this allows for assciation to be defined.

.controller('secondController', ['$scope', 'Second', function($scope, Second){
  $scope.secondMessage = Second.message;
}])


