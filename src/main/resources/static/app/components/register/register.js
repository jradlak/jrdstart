'use strict';

angular.module('jrdstart')
    .config(function ($stateProvider) {
        $stateProvider
            .state('register', {
                parent: 'site',
                url: 'register',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: '/app/components/register/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
    });