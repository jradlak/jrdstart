'use strict';

angular.module('jrdstart', [ 'LocalStorageModule', 'ui.router', 'ngResource' ])
.run(function($rootScope, $state, Auth) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        console.log('state changed to state');
        console.log(toState);
    });
})
.config(function($httpProvider) {

   
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	$httpProvider.defaults.xsrfCookieName = 'XSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
});