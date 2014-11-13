angular.module('angularThing.mainController', ['ui.router'])

.config(['$stateProvider', function($stateProvider){
  $stateProvider
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
      views: { 
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
.controller("mainController", ['$scope', '$state', 'Main', function($scope, $state, Main){
  $scope.message = Main.message;
}])
