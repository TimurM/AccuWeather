(function() {
    var weatherFactory = function($http) {

        var factory = {};

        factory.getForecast = function(location, num_days){
          return $http.get('http://api.worldweatheronline.com/premium/v1/weather.ashx?key=86be0dbccf2e95c06fbc644c71a22&q='
          + location
          + '&num_of_days='
          + num_days
          + '&tp=24'
          + '&format=json');
      };

        factory.pastWeather = function(location, start_date, end_date){
            return;
        };

        return factory;
    };

    weatherFactory.$inject = ['$http'];

    angular.module('accuWeather').factory('weatherFactory',
                                           weatherFactory);

}());
