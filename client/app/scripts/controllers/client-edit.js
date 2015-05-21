'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientEditCtrl
 * @description
 * # ClientEditCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientEditCtrl', function ($scope, $routeParams, Client, $location) {
    $scope.editClient = true;
    $scope.client = {};
    Client.one($routeParams.id).get().then(function(client) {
      $scope.client = client;
      $scope.saveClient = function() {
        $scope.client.save().then(function() {
          $location.path('/client/' + $routeParams.id);
        });
      };
    });
  });
