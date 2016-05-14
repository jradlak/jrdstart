'use strict';

angular.module('jrdstart')
    .controller('HomeController', function($http, $scope) {
        $scope.greeting = {}
        $http.get('/api/resource/').success(function(data) {
            $scope.greeting = data;
        })
    });