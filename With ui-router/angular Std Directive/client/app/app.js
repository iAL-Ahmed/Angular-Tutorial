//Directives are in the "second" directory
angular.module("angularThing", [
  'ui.router',
  'angularThing.mainController', //the "angular_thing" is the ng-app you are using
  'angularThing.mainFactory',
  'angularThing.secondController',
  'angularThing.secondFactory',
  'angularThing.secondDirective'
]) //add any modules to be injected into app

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/main');
  $stateProvider  //you must load ALL states that will be viewable in this ui-view here.
    .state('main', {
      url: '/main',
      templateUrl: 'app/main/main.tpl.html',
      controller: 'mainController'
    })
    .state('secondPage', {
      url: '/second',
      templateUrl: 'app/second/second.tpl.html',
      controller:'secondController'
    })
  

}])