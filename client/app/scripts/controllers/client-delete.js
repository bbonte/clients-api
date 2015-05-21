'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientDeleteCtrl
 * @description
 * # ClientDeleteCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientDeleteCtrl', function ($scope, $routeParams, Client, $location) {
    $scope.client = Client.one($routeParams.id).get().$object;
    $scope.deleteClient = function() {
      $scope.client.remove().then(function() {
        $location.path('/clients');
      });
    };
    $scope.back = function() {
      $location.path('/client/' + $routeParams.id);
    };
  });
