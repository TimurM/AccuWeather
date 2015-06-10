'use strict';

(function() {
    var WeatherController = function($scope) {
      $scope.location = null;

      function init() {
                window.onload = function() {
                  var geoSuccess = function(position) {
                    console.log(position);
                    var lat = position.coords.latitude;
                    var lon = position.coords.longitude;
                    $scope.location = [lat, lon].join(",");
                    console.log($scope.location);
                  };
                  var geoError = function(position) {
                    alert('Error occurred. Error code: ' + error.code);
                  };
                  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
                };
        };

        init();
    };

    WeatherController.$inject = ['$scope'];

    angular.module('accuWeather')
      .controller('WeatherController', WeatherController);
}());
