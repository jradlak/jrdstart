'use strict';

angular.module('jrdstart')
    .factory('Auth', function Auth($rootScope, Register) {
        return {
            createAccount: function (account, callback) {
                var cb = callback || angular.noop;

                return Register.save(account,
                    function () {
                        return cb(account);
                    },
                    function (err) {
                        this.logout();
                        return cb(err);
                    }.bind(this)).$promise;
            }
        }
    });