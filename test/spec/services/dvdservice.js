'use strict';

describe('Service: dvdservice', function () {

  // load the service's module
  beforeEach(module('codeclubspikeApp'));

  // instantiate service
  var dvdservice;
  beforeEach(inject(function(_dvdservice_) {
    dvdservice = _dvdservice_;
  }));

  it('should do something', function () {
    expect(!!dvdservice).toBe(true);
  });

});
