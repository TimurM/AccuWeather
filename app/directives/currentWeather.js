(function() {
    var currentWeather = function () {
      return {
        scope: {
          datasource: "="
        },
        restrict: 'E',
        templateUrl: 'directives/currentWeather.html'
      }
    };

    angular.module("accuWeather")
      .directive('currentWeather', currentWeather);
}());
