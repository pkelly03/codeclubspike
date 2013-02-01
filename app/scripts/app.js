'use strict';

var codeclubspikeApp = angular.module('codeclubspikeApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/listing.html',
        controller: 'ListDvdController'
      })
      .when('/new', {
        templateUrl: 'views/detail.html',
        controller: 'CreateDvdController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
