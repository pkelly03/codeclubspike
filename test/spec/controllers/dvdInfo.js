'use strict';

describe('Controller: DvdInfoCtrl', function() {

  // load the controller's module
  beforeEach(module('codeclubspikeApp'));

  var DvdInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    DvdInfoCtrl = $controller('DvdInfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
