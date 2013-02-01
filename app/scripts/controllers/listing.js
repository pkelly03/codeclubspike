'use strict';

codeclubspikeApp.controller('ListDvdController', function($scope, dvdservice) {
  $scope.getDvds = function() {
     return dvdservice.getDvds();
  }
});
