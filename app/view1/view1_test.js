'use strict';

describe('app: accuWeather', function() {
  var $controller, scope;

  beforeEach(module('accuWeather'));

  beforeEach(inject(function ($rootScope, _$controller_) {
    scope = $rootScope.$new();
    $controller = _$controller_('WeatherController', {$scope: scope});
  }))

  it("ensures init method has been called", function() {
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

  describe('factory: weatherFactory is working properly', function() {
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
  var mockedFactory, weather, scope, q, deferred, $controller, weatherResponse;

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
          ],
          "weather": [
          	{
              "maxtempF": "68",
          		"hourly": [
          			{
          			"precipMM": "0.0",
          			}
          		]
            },
            {
              "maxtempF": "78",
          		"hourly": [
          			{
          			"precipMM": "3.0",
          			}
          		]
            },
            {
              "maxtempF": "68",
          		"hourly": [
          			{
          			"precipMM": "0.0",
          			}
          		]
            }
          ]
        }
      }
    };

    weather = { "location": "new york",
              "start_date": "Mon Jun 01 2015 00:00:00 GMT-0700 (PDT)",
              "end_date": "Fri Jun 05 2015 00:00:00 GMT-0700 (PDT)"};

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

  it('currentWeather should be set by API response', function() {
    scope.search();
    deferred.resolve(weatherResponse);
    scope.$root.$digest();
    expect(scope.currentWeather.temp_F).toBe("80");
  });

  it('should make a call to the getPastForecast function', function() {
    spyOn(mockedFactory, 'getPastWeather').andCallThrough();
    scope.pastWeather(weather);
    expect(mockedFactory.getPastWeather).toHaveBeenCalled();
  });

  it('precentSunnyDays should be defined', function() {
    scope.search();
    deferred.resolve(weatherResponse);
    scope.$root.$digest();
    expect(scope.precentSunnyDays).not.toBe(undefined);
  });

  it('precentSunnyDays should be set', function() {
    scope.search();
    deferred.resolve(weatherResponse);
    scope.$root.$digest();
    expect(scope.precentSunnyDays).toBe(67);
  });

  it('tempArray should be populated', function() {
    scope.search();
    deferred.resolve(weatherResponse);
    scope.$root.$digest();
    expect(scope.tempArray.length).toBe(3);
  });

  it('precipMM should be populated', function() {
    scope.search();
    deferred.resolve(weatherResponse);
    scope.$root.$digest();
    expect(scope.precipMM.length).toBe(3);
  });

  it('precentSunnyDays should be defined', function() {
    scope.search();
    deferred.resolve(weatherResponse);
    scope.$root.$digest();
    expect(scope.precentSunnyDays).not.toBe(undefined);
  });

  it('pastWeather should be set by API response', function() {
    scope.pastWeather(weather);
    deferred.resolve(weatherResponse);
    scope.$root.$digest();
    expect(scope.tempArray.length).toBe(3);
  });
});
