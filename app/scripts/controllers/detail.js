'use strict';

codeclubspikeApp.controller('CreateDvdCtrl', function($scope, myDummyAjaxProxy) {
	$scope.addDvd = function() {
		myDummyAjaxProxy.addDvd({name : $scope.form.name, director: $scope.form.director, year: $scope.form.year});
	};
});

CreateDvdCtrl.$inject = ['$scope', 'myDummyAjaxProxy'];