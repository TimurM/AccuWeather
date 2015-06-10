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

    it("Should define pastWeather function", function() {
      expect(factory.pastWeather).toBeDefined();
      expect(factory.pastWeather).toEqual(jasmine.any(Function));
    });
  });
});

describe('testing weatherController.search', function() {
  var mockedFactory, scope, q, deferred, $controller, object;

  beforeEach(module('accuWeather'));

    beforeEach(function(){
    object = {"temp_F": "80", "precip": "2.2"};

    mockedFactory = {
      getForecast: function(location){
        deferred = q.defer();
        return deferred.promise;
      }
    };

  });

  beforeEach(inject(function($rootScope, $controller, $q) {
    q = $q;
    scope = $rootScope.$new();
    $controller = $controller('WeatherController', {
      $scope: scope, weatherFactory: mockedFactory
    });
  }));

  it('should request search the function', function() {
    spyOn(mockedFactory, 'getForecast').andCallThrough();
    // scope.init();
    scope.search("newyork");
    expect(mockedFactory.getForecast).toHaveBeenCalled();
  });

// describe('testing weatherController.search', function() {
//   var mockedFactory, scope, $controller;
//
//   beforeEach(module('accuWeather', function($provide) {
//     mockedFactory = {
//       getForecast: {
//         forecast: "sunny"
//       }
//     };
//
//     $provide.value('weatherFactory', mockedFactory);
//   }));
//
//   beforeEach(inject(function($rootScope, _$controller_) {
//     scope = $rootScope.$new();
//     $controller = _$controller_('WeatherController', {$scope: scope});
//   }));
//
//   it('should call search function', function() {
//     spyOn(mockedFactory, 'getForecast');
//     scope.search();
//     expect(mockedFactory.getForecast).toHaveBeenCalled();
//   });
});
