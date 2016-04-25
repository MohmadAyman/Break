angular.module('expressNode', ['ngResource', 'ngRoute']).controller('mainController',function($scope, $http, $rootScope,$routeProvider, $locationProvider) {
$locationProvider.html5Mode(true);
$routeProvider.when('/', {
 templateUrl: '../src/views/partials/userMain.ejs',
      controller: 'userUIcontroller'
    }).otherwise({
      redirectTo: '/',
      caseInsensitiveMatch: true
    })


}); 