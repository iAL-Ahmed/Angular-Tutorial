angular.module('angularThing.mainController', ['ui.router']) 
//here you only need to inject ui.router
//as it is the only module you need

.config(['$stateProvider', function($stateProvider){ //config to prepare this module
                                                     //for the many states it will host
  $stateProvider //declare your default state ("main")
    .state('main', {
      url:'/main',
      //for views there are 2 requirements.
      //1. you must have a "" state in views. This serves as the state config for
      //the primary module that hosts the other views.
      //2. Any added views require that you explicitly declare who the parent view
      //is. This is known as absolute naming. 
      //
      //From here you need only be sure you have a ui-view in the main template
      //that is assigned to each of the nested views.
      views: { //your are basically doing a config in views
        "": { templateUrl: 'app/main/main.tpl.html',
              controller:  'mainController'
            },
        "second@main": { templateUrl: 'app/second/second.tpl.html',
                         controller: 'secondController'
                       },
        "third@main": { templateUrl: 'app/third/third.tpl.html',
                        controller: 'thirdController'
                      }
      }
    })
}])

//inject any added functionality you need for the main module
.controller("mainController", ['$scope', '$state', 'Main', function($scope, $state, Main){
  $scope.message = Main.message; //load your factory object references to the scope if needed.
}])
