'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/clients', {
        templateUrl: 'views/clients.html',
        controller: 'ClientsCtrl'
      })
      .when('/create/client', {
        templateUrl: 'views/client-add.html',
        controller: 'ClientAddCtrl'
      })
      .when('/client/:id', {
        templateUrl: 'views/client-view.html',
        controller: 'ClientViewCtrl'
      })
      .when('/client/:id/delete', {
        templateUrl: 'views/client-delete.html',
        controller: 'ClientDeleteCtrl'
      })
      .when('/client/:id/edit', {
        templateUrl: 'views/client-edit.html',
        controller: 'ClientEditCtrl'
      })
      .otherwise({
        redirectTo: '/clients'
      });
  })
  .factory('ClientRestangular', function(Restangular) {
    return Restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Client', function(ClientRestangular) {
    return ClientRestangular.service('client');
  });
