'use strict';

angular.module('jrdstart', [ 'ngRoute', 'ngResource' ]).config(function($routeProvider, $httpProvider) {
    $routeProvider.when('/', {
		templateUrl : '/app/components/home/home.html',
		controller : 'home',
		controllerAs: 'controller'
	}).when('/login', {
		templateUrl : '/app/components/login/login.html',
		controller : 'login',
		controllerAs: 'controller'
	}).when('/register', {
    	templateUrl : '/app/components/register/register.html',
    	controller : 'register',
    	controllerAs: 'controller'
    }).otherwise('/');

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});