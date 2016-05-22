'use strict';

angular.module('jrdstart')
    .controller('NavbarController', function ($scope, $state, Auth, Principal) {
        $scope.isAuthenticated = Principal.isAuthenticated;
        $scope.hasAuthority = Principal.hasAuthority;
        $scope.$state = $state;

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };
    });
