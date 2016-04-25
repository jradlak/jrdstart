'use strict';

angular.module('jrdstart')
    .controller('login',

		function($rootScope, $http, $location, $route) {

			var self = this;

			self.tab = function(route) {
				return $route.current && route === $route.current.controller;
			};

			var authenticate = function(credentials, callback) {
                if (credentials) {
                    $http.post("api/authentication", "username="
                    + encodeURIComponent(credentials.username) + "&password="
                    + encodeURIComponent(credentials.password), {
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                        }).then(function(data) {
                            $rootScope.authenticated = true;
                            $rootScope.error = false;
                            callback && callback($rootScope.authenticated);
                        }, function(data) {
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
				$http.post('logout', {}).finally(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				});
			}

		})