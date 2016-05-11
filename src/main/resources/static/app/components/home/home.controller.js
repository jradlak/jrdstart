'use strict';

angular.module('jrdstart')
    .controller('HomeController', function($http) {
        var self = this;
        $http.get('/resource/').success(function(data) {
            self.greeting = data;
        })
    });