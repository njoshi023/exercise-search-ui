myApp.config(['$routeProvider', function($routeProvider) {      
    // Default view
    $routeProvider.otherwise({redirectTo: '/'});
    
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'Search'});
    $routeProvider.when('/route1', {templateUrl: 'partials/page1.html', controller: 'Ctrl1'});
    $routeProvider.when('/route2', {templateUrl: 'partials/page2.html', controller: 'Ctrl2'});
}]);

