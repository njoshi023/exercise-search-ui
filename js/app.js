// Initialize the AngularJS system
var myApp = angular.module('myApp', ['ngRoute']);

myApp.directive('errSrc', function() {
  return {
    link: function(scope, element, attrs) {
      element.bind('error', function() {
        element.attr('src', attrs.errSrc);
      });
    }
  }
});
