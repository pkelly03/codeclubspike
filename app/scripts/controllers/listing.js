'use strict';

codeclubspikeApp.controller('ListDvdController', function($scope, myDummyAjaxProxy) {
  $scope.getDvds = function() {
     myDummyAjaxProxy.getDvds();
  }
});

ListDvdController.$inject = ['$scope', 'myDummyAjaxProxy'];
