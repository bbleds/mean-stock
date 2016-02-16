"use strict";

const app = angular.module("stockApp", ["ui.router"]);

//configure app with ui-router
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	//configure routes
	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'www/html-partials/index.html'
		})
	//if we load in erroneous route, go  back to base/catch-all route
	$urlRouterProvider.otherwise('/');

		// //remove hashes from urls -> clean presentation of url
		// $locationProvider.html5Mode(true);
});