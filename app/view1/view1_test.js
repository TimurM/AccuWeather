'use strict';

describe('accuWeather module', function() {
  var ctrl, scope;

  beforeEach(module('accuWeather'));

  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('WeatherController', {$scope: scope});
  }))

  it("ensure init method has been called", function() {
    spyOn(scope, 'init');
    scope.init();
    expect(scope.init).toHaveBeenCalled();
  });

  it("has a location variable set on scope with geo coord", function() {
    expect(scope.location).toBeDefined();
    expect(scope.location).not.toEqual('null');
  });
});
