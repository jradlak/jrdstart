'use strict';

angular.module('jrdstart', [ 'LocalStorageModule', 'ui.router', 'ngResource' ])
.run(function($rootScope, $state, Auth) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        console.log('state changed to state');
        console.log(toState);
    });
})
.config(function($stateProvider, $httpProvider) {

    /*
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
    */

	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	$httpProvider.defaults.xsrfCookieName = 'XSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
});