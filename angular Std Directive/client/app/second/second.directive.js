angular.module('angularThing.secondDirective', [])

.directive('aSecondDirective', function() {
  return {
    restrict: 'E', //this allows you define how this directive only ever work
                   //"E" stands for element, "A" attribute, "C" class.
    scope: {
      stuff: '=data'
    },
    templateUrl: 'app/second/second.tpl.html'
  };
});
