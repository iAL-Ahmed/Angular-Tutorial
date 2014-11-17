angular.module('angularThing.mainController', [])

//define the name of this controller, and then inject any objects you will need.
.controller("mainController", ['$scope', 'Main', function($scope, Main){ 
  $scope.message = Main.message; 
}])