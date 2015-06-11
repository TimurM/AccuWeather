'use strict';

(function() {
    var WeatherController = function($scope, weatherFactory) {
      $scope.location = null;
      $scope.currentWeather = null;
      $scope.tempArray = [];
      $scope.tempDates = [];
      $scope.precipMM = [];

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
            parseWeatherData(forecast.data);
          })
        };

        $scope.pastWeather = function(location, start_date, end_date) {
          var location = location || $scope.location;

          weatherFactory.getPastWeather(location, start_date, end_date).then(function(pastWeather) {
            parseWeatherData(forecast.data);
          })
        };

        function parseWeatherData(object) {
          resetScope();
          var totalDays = object.data.weather.length;
          var rainDays = 0;

          object.data.weather.forEach(function(day) {
            $scope.tempArray.push(day.maxtempF);
            $scope.tempDates.push(day.date);
            $scope.precipMM.push(day.hourly[0].precipMM);

            if (parseInt(day.hourly[0].precipMM) > 2) {
             rainDays += 1
            }
          })
          console.log($scope.tempArray);
          console.log($scope.tempDates);
          console.log($scope.precipMM);
          $scope.precentSunnyDays = Math.round((totalDays - rainDays) / totalDays * 100);
        };

        function resetScope() {
          $scope.tempArray.length = 0;
          $scope.tempDates.length = 0;
          $scope.precipMM.length = 0;
        };


        $scope.init();
    };

    WeatherController.$inject = ['$scope', 'weatherFactory'];

    angular.module('accuWeather')
      .controller('WeatherController', WeatherController);
}());
