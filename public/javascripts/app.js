"use strict";

const app = angular.module("stockApp", ["ui.router"]);

//configure app with ui-router
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	//configure routes, controllers are bound within html partials
	$stateProvider
		.state('index', {
			url: '/',
			templateUrl: 'www/html-partials/index.html'
		})
		.state('quotes', {
			url: '/quotes',
			templateUrl: 'www/html-partials/quotes.html'
		})
	//if we load in erroneous route, go  back to base/catch-all route
	$urlRouterProvider.otherwise('/');

		// //remove hashes from urls -> clean presentation of url
		// $locationProvider.html5Mode(true);
});