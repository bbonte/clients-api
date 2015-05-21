'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ClientsCtrl', function ($scope, Client) {
    $scope.clients = Client.getList().$object;
  });
