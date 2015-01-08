angular.module('angularThing.secondDirective', [])

.directive('aSecondDirective', function() {
  return {
    restrict: 'E', //this allows you define how this directive will only ever work
                   //"E" stands for element, "A" attribute, "C" class.
    scope: {
      stuff: '=data' //this is allowing you to declare a data point when you add in
                     // the directive in the index.html
    },
    templateUrl: 'app/second/second.tpl.html' //the template for the directive
  };
});
