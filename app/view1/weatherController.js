'use strict';

(function() {
    var WeatherController = function($scope, weatherFactory) {
      $scope.location = null;
      $scope.currentWeather = null;
      $scope.pastWeather = null;

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
            $scope.currentWeather = forecast.data.data.current_condition[0];
            console.log($scope.currentWeather)
          })
        };

        $scope.pastWeather = function(location, start_date, end_date) {
          var location = location || $scope.location;

          weatherFactory.getPastWeather(location, start_date, end_date).then(function(pastWeather) {
            $scope.pastWeather = pastWeather;
          })
        };

        $scope.init();
    };

    WeatherController.$inject = ['$scope', 'weatherFactory'];

    angular.module('accuWeather')
      .controller('WeatherController', WeatherController);
}());
