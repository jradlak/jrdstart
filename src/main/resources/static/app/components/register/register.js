'use strict';

angular.module('jrdstart')
    .config(function ($stateProvider) {
        $stateProvider
            .state('register', {
                //parent: 'site',
                url: 'register',
                views: {
                    'content@': {
                        templateUrl: '/app/components/register/register.html',
                        controller: 'RegisterController'
                    }
                }
            });
    });