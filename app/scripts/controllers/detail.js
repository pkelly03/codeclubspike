'use strict';

codeclubspikeApp.controller('CreateDvdController', function($scope, dvdService) {
	$scope.addDvd = function() {
		dvdService.addDvd({name : $scope.form.name, director: $scope.form.director, year: $scope.form.year});
	};
});
