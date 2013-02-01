'use strict';

describe('Controller: DvdListingCtrl', function() {

  // load the controller's module
  beforeEach(module('codeclubspikeApp'));

  var DvdListingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    DvdListingCtrl = $controller('DvdListingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
