'use strict';

angular.module('jrdstart')
    .controller('LoginController',

		function($rootScope, $http, $location, $route, Auth) {
			var self = this;

			self.tab = function(route) {
				return $route.current && route === $route.current.controller;
			};

			var authenticate = function(credentials, callback) {
                if (credentials) {
                    Auth.login(credentials).then(function (data) {
                        $rootScope.authenticated = true;
                        $rootScope.error = false;
                        callback && callback($rootScope.authenticated);
                    }).catch(function (err) {
                        $rootScope.authenticated = false;
                        $rootScope.error = true;
                        callback && callback(false);
                    });
                }
			}

			authenticate();

			self.credentials = {};
			self.login = function() {
				authenticate(self.credentials, function(authenticated) {
					if (authenticated) {
						console.log("Login succeeded")
						$location.path("/");
						self.error = false;
						$rootScope.authenticated = true;
					} else {
						console.log("Login failed")
						$location.path("/login");
						self.error = true;
						$rootScope.authenticated = false;
					}
				})
			};

			self.logout = function() {
				$http.post('api/logout', {}).finally(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				});
			}
		})