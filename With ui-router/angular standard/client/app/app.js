
angular.module("angularThing", [ 
  'ui.router',                   //the angular plug in responsible state management
  'angularThing.mainController', //the "angularThing" is the ng-app you are using
  'angularThing.mainFactory',
  'angularThing.secondController',
  'angularThing.secondFactory'
]) //add any modules to be injected into app

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/main'); //gives a default state to load in the event that 
                                         //the user selects a site url that does not exist.

  $stateProvider  //you must load ALL states that will be viewable in this ui-view here.
                  //$stateProvider is a part of ui-router
    .state('main', { //name of state
      url: '/main',  //what url will show up at the top of the page in the url bar
      templateUrl: 'app/main/main.tpl.html', //the location of the html file for this state
      controller: 'mainController' //the controller for this state.
    })
    .state('secondPage', {
      url: '/second',
      templateUrl: 'app/second/second.tpl.html',
      controller:'secondController'
    })
    .state('test', {
      url: '/test/:id',
      templateUrl: 'app/second/second.tpl.html',
      controller: 'secondController'
    })
  

}])