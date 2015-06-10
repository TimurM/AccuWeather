'use strict';

(function() {
    var WeatherController = function($scope, weatherFactory) {
      $scope.location = null;
      $scope.currentWeather = null;

      $scope.init = function() {
                window.onload = function() {
                  var geoSuccess = function(position) {

                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
                    $scope.location = [lat, lon].join(",");
                    $scope.search($scope.location);
                  };
                  var geoError = function(position) {
                    alert('Error occurred. Error code: ' + error.code);
                  };
                  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
                };
        };

        $scope.search = function(location) {
          var location = location || $scope.location;

          weatherFactory.getForecast(location, '20').then(function(forecast) {
            $scope.currentWeather = forecast.data.current_condition[0];
          
          })
        };

        $scope.init();
    };

    WeatherController.$inject = ['$scope', 'weatherFactory'];

    angular.module('accuWeather')
      .controller('WeatherController', WeatherController);
}());
