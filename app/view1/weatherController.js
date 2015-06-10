'use strict';

(function() {
    var WeatherController = function($scope) {
      $scope.location = null;

      $scope.init = function() {
                window.onload = function() {
                  var geoSuccess = function(position) {

                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
                    $scope.location = [lat, lon].join(",");

                  };
                  var geoError = function(position) {
                    alert('Error occurred. Error code: ' + error.code);
                  };
                  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
                };
        };

        $scope.init();
    };

    WeatherController.$inject = ['$scope'];

    angular.module('accuWeather')
      .controller('WeatherController', WeatherController);
}());
