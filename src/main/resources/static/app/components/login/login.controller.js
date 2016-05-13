'use strict';
angular.module('jrdstart')
    .controller('LoginController',
		function($rootScope, $scope, $http, $location, Auth) {

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

			$scope.credentials = {};
			$scope.login = function() {
				authenticate($scope.credentials, function(authenticated) {
					if (authenticated) {
						console.log("Login succeeded")
						$location.path("/");
						$scope.error = false;
						$rootScope.authenticated = true;
					} else {
						console.log("Login failed")
						$location.path("/login");
						$scope.error = true;
						$rootScope.authenticated = false;
					}
				})
			};

			$scope.logout = function() {
				$http.post('api/logout', {}).finally(function() {
					$rootScope.authenticated = false;
					$location.path("/");
				});
			}
		})