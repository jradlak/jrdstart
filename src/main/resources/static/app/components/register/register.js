'use strict';

angular.module('jrdstart')
    .config(function ($stateProvider) {
        $stateProvider
            .state('register', {
                url: 'register',
                views: {
                    'content@': {
                        templateUrl: '/app/components/register/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
    });