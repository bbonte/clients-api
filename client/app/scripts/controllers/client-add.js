'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientAddCtrl
 * @description
 * # ClientAddCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientAddCtrl', function ($scope, Client, $location) {
    $scope.client = {};
    $scope.saveClient = function() {
      Client.post($scope.client).then(function() {
        $location.path('/clients');
      });
    };
  });
