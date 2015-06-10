'use strict';

describe('app: accuWeather', function() {
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

describe('app: accuWeather', function() {
  beforeEach(module('accuWeather'));
  var ctrl;

  beforeEach(inject(function(_$controller_) {
    ctrl = _$controller_;
  }));

  describe('factory: weatherFactory', function() {
    var factory = null;
    beforeEach(inject(function(weatherFactory) {
      factory = weatherFactory;
    }))

    it("Should define getForecast function", function() {
      expect(factory.getForecast).toBeDefined();
      expect(factory.getForecast).toEqual(jasmine.any(Function));
    });

    it("Should define getForecast function", function() {
      expect(factory.pastWeather).toBeDefined();
      expect(factory.pastWeather).toEqual(jasmine.any(Function));
    });
  });
});
