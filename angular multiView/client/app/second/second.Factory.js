angular.module('angularThing.secondFactory', []) //just a standard factory.

.factory('Second', [function() {
  return {message: "SECOND!!!!"}
}])