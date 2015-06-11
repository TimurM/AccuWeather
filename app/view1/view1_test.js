'use strict';

describe('app: accuWeather', function() {
  var $controller, scope;

  beforeEach(module('accuWeather'));

  beforeEach(inject(function ($rootScope, _$controller_) {
    scope = $rootScope.$new();
    $controller = _$controller_('WeatherController', {$scope: scope});
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
  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
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

    it("Should define getPastWeather function", function() {
      expect(factory.getPastWeather).toBeDefined();
      expect(factory.getPastWeather).toEqual(jasmine.any(Function));
    });
  });
});

describe('testing weatherController', function() {
  var mockedFactory, scope, q, deferred, $controller, weatherResponse;

  beforeEach(module('accuWeather'));

    beforeEach(function(){

    weatherResponse = {
      "data": {
        "data": {
          "current_condition": [
            {
              "temp_F": "80",
              "precip": "2.2"
              }
          ]
        }
      }
    };

    mockedFactory = {
      getForecast: function(){
        deferred = q.defer();
        return deferred.promise;
      },
      getPastWeather: function(){
        deferred = q.defer();
        return deferred.promise;
      },
    };
  });

  beforeEach(inject(function($rootScope, $controller, $q) {
    q = $q;
    scope = $rootScope.$new();
    $controller = $controller('WeatherController', {
      $scope: scope, weatherFactory: mockedFactory
    });
  }));

  it('should make a call to the getForecast function', function() {
    spyOn(mockedFactory, 'getForecast').andCallThrough();
    scope.search();
    expect(mockedFactory.getForecast).toHaveBeenCalled();
  });

  it('should request the search function', function() {
    scope.search();
    expect(scope.currentWeather).not.toBe(undefined);
  });

  // it('currentWeather should be set by API response', function() {
  //   scope.search();
  //   deferred.resolve(weatherResponse);
  //   scope.$root.$digest();
  //   expect(scope.currentWeather.temp_F).toBe("80");
  // });

  it('should make a call to the getPastForecast function', function() {
    spyOn(mockedFactory, 'getPastWeather').andCallThrough();
    scope.pastWeather();
    expect(mockedFactory.getPastWeather).toHaveBeenCalled();
  });

  // it('should request the pastWeather function', function() {
  //   scope.pastWeather();
  //   expect(scope.pastWeather).not.toBe(undefined);
  // });
  //
  // it('pastWeather should be set by API response', function() {
  //   scope.pastWeather();
  //   deferred.resolve(weatherResponse);
  //   scope.$root.$digest();
  //   expect(scope.pastWeather.data.data.current_condition[0].temp_F).toBe("80");
  // });
});
