
angular.module("angularThing", [
  'angularThing.mainController', //the "angular_thing" is the ng-app you are using
  'angularThing.mainFactory',
  'angularThing.secondController',
  'angularThing.secondFactory',
  'angularThing.thirdController',
  'angularThing.thirdFactory',
  'ui.router'
]) //add any modules to be injected into app

.config(['$urlRouterProvider', function($urlRouterProvider){
  $urlRouterProvider.otherwise('/main');
}])