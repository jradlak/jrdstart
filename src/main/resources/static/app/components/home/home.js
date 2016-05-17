'use strict';

angular.module('jrdstart')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: 'home',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: '/app/components/home/home.html',
                        controller: 'HomeController'
                    }
                }
            });
    });