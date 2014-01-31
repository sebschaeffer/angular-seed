// Declare app level module which depends on filters, and services
var choisrApp = angular.module('choisrApp', [
  'ngRoute',
  // 'choisrApp.filters',
  // 'choisrApp.services',
  // 'choisrApp.directives',
  'choisrApp.controller'
]);

choisrApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				controller: 'setsController',
				templateUrl: 'partials/partial1.html'
			})
		.otherwise({ redirectTo: '/' });
});