'use strict';

angular.module('jrdstart')
    .config(function ($stateProvider) {
        $stateProvider
            .state('RegisterController', {
                url: 'register',
                views: {
                    'content@': {
                        templateUrl: '/app/components/register/register.html',
                        controller: 'LoginController'
                    }
                }
            });
    });