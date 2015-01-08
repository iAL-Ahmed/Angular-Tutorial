
angular.module("angularThing", [
  'angularThing.mainController', //the "angularThing" is the ng-app you are using
  'angularThing.mainFactory',
  'angularThing.secondController',
  'angularThing.secondFactory',
  'angularThing.thirdController',
  'angularThing.thirdFactory',
  'ui.router'
]) //add any modules to be injected into app

 //Here we set up the main Module
.config(['$urlRouterProvider', function($urlRouterProvider){
  $urlRouterProvider.otherwise('/main'); //gives a default state to load in the event that 
                                         //the user selects a site url that does not exist.
}])