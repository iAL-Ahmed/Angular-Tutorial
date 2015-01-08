angular.module('angularThing.thirdController', ['ui.router'])
//all state config stuff happens in the main controller in the views object.
//this allows for assuciation to be defined.

.controller('thirdController', ['$scope', 'Third', function($scope, Third){
  $scope.thirdMessage = Third.message;
}])


