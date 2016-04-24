'use strict';

angular.module('jrdstart')
    .controller('home', function($http) {
        var self = this;
        $http.get('/resource/').success(function(data) {
            self.greeting = data;
        })
    });