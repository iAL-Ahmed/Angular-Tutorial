angular.module('angularThing.mainFactory', [])

.factory('Main', [function(){ //name of the factory object to be made and the constructor function.
  return {message: "First"}   //this function may call other functions depending 
}])                           //on how you design it, but it will be returning an
                              //object which will be labeled "Main"

                              //A good way to think about what a factory is is that
                              //it is a provider. When you make that object it will
                              //be stored along with all the other provider objects
                              //like $scope. They are all just a bunch of objects in
                              //the end.