'use strict';

angular.module('jrdstart')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });