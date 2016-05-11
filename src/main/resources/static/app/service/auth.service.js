'use strict';

angular.module('jrdstart')
    .factory('Auth', function Auth($rootScope, Register, $http, localStorageService) {
        return {
            login: function(credentials) {
                 var data = 'username=' + encodeURIComponent(credentials.username) +
                     '&password=' + encodeURIComponent(credentials.password);
                 return $http.post('api/authentication', data, {
                     headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                     }
                 }).success(function (response) {
                     return response;
                 });
            },
            createAccount: function(account, callback) {
                var cb = callback || angular.noop;
                return Register.save(account,
                    function () {
                        return cb(account);
                    },
                    function (err) {
                        //this.logout();
                        return cb(err);
                    }.bind(this)).$promise;
            }
        }
    });