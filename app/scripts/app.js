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


codeclubspikeApp.factory('myDummyAjaxProxy', function ($rootScope) {

  var service = {};
  service.dvds = [
    {"name": "Forrest Gump",
     "director": "Director A",
     "year": 1995},
    {"name": "American History X",
     "director": "Director B",
     "year": 1996},
    {"name": "Shawshank Redemption",
     "director": "Director C",
     "year": 1996}
  ];

  service.getDvds() = function() {
    return service.dvds;
  }

  service.addDvd(dvdToAdd) = function() {
    service.dvds.push(dvdToAdd);
  }

  return service;   

});

