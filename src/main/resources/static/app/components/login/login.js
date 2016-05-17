'use strict';

angular.module('jrdstart')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                parent: 'site',
                url: 'login',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: '/app/components/login/login.html',
                        controller: 'LoginController'
                    }
                }
            });
    });