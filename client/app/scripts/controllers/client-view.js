'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientViewCtrl
 * @description
 * # ClientViewCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientViewCtrl', function ($scope, $routeParams, Client) {
    $scope.viewClient = true;
    $scope.client = Client.one($routeParams.id).get().$object;
  });
