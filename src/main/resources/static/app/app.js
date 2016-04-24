'use strict';

angular.module('jrdstart', [ 'ngRoute' ]).config(function($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
		templateUrl : '/app/home/home.html',
		controller : 'home',
		controllerAs: 'controller'
	}).when('/login', {
		templateUrl : '/app/login/login.html',
		controller : 'login',
		controllerAs: 'controller'
	}).when('/register', {
    	templateUrl : '/app/register/register.html',
    	controller : 'register',
    	controllerAs: 'controller'
    }).otherwise('/');

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});